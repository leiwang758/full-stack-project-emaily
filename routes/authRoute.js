const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log(req);
    req.logout(); // kills the cookie with id
    res.redirect("/");
    //res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    //res.send(req.session);
    res.send(req.user);
  });
};
