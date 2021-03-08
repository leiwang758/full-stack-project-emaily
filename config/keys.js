// key.js - figure out what set of credentials to return, this logic dosen't work for ES2015 module.
if (process.env.NODE_ENV === "production") {
	// happens automatically in heroku
	// we are in production - return the prod set of keys
	module.exports = require("./prod");
} else {
	// we are in development - return the dev keys !!!
	module.exports = require("./dev");
}
