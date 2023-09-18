const passport = require("passport");
const { User } = require("../DB");
const { createUser } = require("../controllers/UserControllers");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1006411361898-7t5cpmfstt370krrfimtm9t4mvdmeuoq.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/api/auth/google/callback",
      scope: ["email", "profile", "phone"],
    },
    (accessToken, refreshToken, profile, done) => {
      try {
        const { name, emails, phoneNumbers } = profile;
        const user = {
          email: emails[0]?.value,
          firstName: name.givenName,
          lastName: name.familyName,
          phone: phoneNumbers ? phoneNumbers[0].value : null,
          email_verified: true,
        };

        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
// Serializar y deserializar al usuario para mantener la sesión
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
