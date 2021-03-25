const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema], // sub-document collection
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: "User" }, // user id --> a relationship field
	dateSent: Date,
	lastResponded: Date,
});
// maximum size for a record is 4Mb

mongoose.model("surveys", surveySchema);
