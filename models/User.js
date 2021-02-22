const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//equals: (tremendous amout)
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	//name: String (you can add anything you like)
});

mongoose.model('users', userSchema);
