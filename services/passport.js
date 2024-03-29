const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

//define a function and pass it to serializeUser()
passport.serializeUser((user, done) => {
	done(null, user.id); // not profile id/google id.
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

// client id: 643180449509-kkm3egn59jqqm0ac82s37ta8eb5g2j.apps.googleusercontent.com
// client secret: Xu18VFzpXGxvGOrxAoxxl
// clientID: Public token - we can share this with the public
// clientSecret: Private token - we dont't want anyone to see this !
passport.use(
	new GoogleStrategy( // any other auth, e.g. Facebook, Github
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback", //relative URL is issue number one that cause https -> http
			// https -> http after proxy, solution 1: full path
			proxy: true, // solution 2
		},
		async (accessToken, refreshToken, profile, done) => {
			// initiate a query

			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				// we already have a record with the given profile ID
				return done(null, existingUser);
				// Tell passport that we have finished creating a user and that it should
				// now resume the auth process
			}
			// we don't have a user record with this ID, make a new record
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);

			// console.log("access token", accessToken);
			// console.log("refresh token", refreshToken);
			// console.log("profile: ", profile);
		} // everything is hanging because google already authed
	)
); // generic resgistration, passport be aware of new strategy
