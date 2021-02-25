const express = require("express"); // common js modules, import express from 'express': es2015 module.
const mongoose = require("mongoose");

const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express(); // listen for incoming request

// init cookies to manage data vs. express-session
// cookie-session: 4kb, express-session: limitless (session store)
app.use(
	cookieSession({
		// config object
		maxAge: 30 * 24 * 60 * 60 * 1000, // last for 30 days before it automatically expires
		keys: [keys.cookieKey], //array
	})
);

app.use(passport.initialize());

app.use(passport.session());

require("./routes/authRoute")(app);
//https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&
//redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%
//20email&client_id=643180449509-kkm3egn59jqsjqm0ac82s37ta8eb5g2j.apps.googleusercontent.com&flowName=GeneralOAuthFlow

// app.get('/', (req, res) => { 		// get: get info, post: send info, put: update all the properties of something, delete:delete something,
// 	res.send({bye: 'bye'});		// patch: update one or two properties of something
// }); 								// req: object representing the incoming request
// res: object representing the out;going response
// send: immediately send some JSON back to who ever made this request

const PORT = process.env.PORT || 5000; // not to be changed likely
app.listen(PORT); // localhost:5000
