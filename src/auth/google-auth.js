const passport = require("passport");
const { User } = require("../DB");
const { createUser } = require("../controllers/UserControllers");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET} = process.env;
passport.use(
  new GoogleStrategy(
    {
      clientID:GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
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
