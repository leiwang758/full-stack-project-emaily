const express = require('express'); // common js modules, import express from 'express': es2015 module.
const app = express();  			// listen for incoming request

app.get('/', (req, res) => { 		// get: get info, post: send info, put: update all the properties of something, delete:delete something,
	res.send({bye: 'bye'});		// patch: update one or two properties of something
}); 								// req: object representing the incoming request
 									// res: object representing the outgoing response
 									// send: immediately send some JSON back to who ever made this request	






const PORT = process.env.PORT || 5000	// not to be changed likely
app.listen(PORT); 						// localhost:5000




