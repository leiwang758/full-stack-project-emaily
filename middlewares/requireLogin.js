module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: "You must log in!" });
	}

	next();
};

// a middleware is a function that takes the incoming request and has the ability of modifying it.
