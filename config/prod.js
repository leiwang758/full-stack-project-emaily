// prod.js production keys are here

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	//mongodb+srv://leiwangProd:HSwY0ZuvsZ6buPXB@cluster0.6pzea.mongodb.net/prod?retryWrites=true&w=majority
	// facebook, etc.

	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY,
	sendGridKey: process.env.SEND_GRID_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN,
}; //
