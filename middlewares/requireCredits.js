module.exports = (req, res, next) => {
	if (req.user.credits <= 0) {
		console.log("not enough credits!");
		return res.status(403).send({ error: "Not enough credits!" });
	}

	// 403 Forbidden

	next();
};
