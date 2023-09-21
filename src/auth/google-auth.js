const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET} = process.env;
passport.use(
  new GoogleStrategy(///creamos la estrategia google , para autenticar al usuario con su gmail.
    {
      clientID:GOOGLE_CLIENT_ID,///configuramos con credenciales.
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/api/auth/google/callback",//representa la ruta del callback que manejara la respuesta.
      scope: ["email", "profile", "phone"],
    },
    (accessToken, refreshToken, profile, done) => {
      try {
        const { name, emails, phoneNumbers } = profile;//del perfil de google obtenemos las propiedades que precisamos para generar un nuevo usuario
        const user = {
          email: emails[0]?.value,
          firstName: name.givenName,
          lastName: name.familyName,
          phone: phoneNumbers ? phoneNumbers[0].value : null,
          email_verified: true,
        };

        return done(null, user);//esta funcion se ejecutara en el callback, donde null es el error, y user el objeto creado anteriormente
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
