const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url"); // default module in nodejs, help parse urls
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

mongoose.set("debug", (collectionName, method, query, doc) => {
	console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

module.exports = (app) => {
	app.get("/api/surveys", requireLogin, async (req, res) => {
		const surveys = await Survey.find({ _user: req.user.id }) // also got the big recipient list
			.select({ recipients: false });
		res.send(surveys);
	});

	app.get("/api/surveys/:surveyId/:choice", (req, res) => {
		res.send("Thanks for voting!");
	});

	app.post("/api/surveys/webhooks", (req, res) => {
		//console.log(req.body);
		const p = new Path("/api/surveys/:surveyId/:choice");
		_.chain(req.body)
			.map(({ email, url }) => {
				const match = p.test(new URL(url).pathname); // can't do deconstruction because it might return null.
				if (match) {
					return {
						email,
						surveyId: match.surveyId,
						choice: match.choice,
					};
				}
			})
			.compact() // remove undefined
			.uniqBy("email", "surveyId") // remove duplicates
			.each(({ surveyId, email, choice }) => {
				Survey.updateOne(
					{
						_id: surveyId,
						recipients: {
							$elemMatch: { email: email, responded: false },
						},
					},
					{
						$inc: { [choice]: 1 },
						$set: { "recipients.$.responded": true },
						lastResponded: new Date(),
					}
				).exec();
			})
			.value();
		//console.log(events);
		res.send({});
	});

	app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;
		//console.log("here");

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients
				.split(",")
				.map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now(),
		});

		// Great place to send an email!
		const mailer = new Mailer(survey, surveyTemplate(survey));

		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	app.delete("/api/surveys/:id", requireLogin, async (req, res) => {
		await Survey.deleteOne({ _id: req.params.id });
		res.json("successfully deleted");
		//res.status(200).send(`delete: ${req.params.id}`);
		//console.log(`delete: ${req.params.id}`);
	});
};
