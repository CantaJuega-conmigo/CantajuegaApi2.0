const passport = require("../auth/google-auth");
module.exports = passport.authenticate("google", { scope: ["email", "profile"] });///scope define los datos que precisamos de la cuenta de google del usuario
