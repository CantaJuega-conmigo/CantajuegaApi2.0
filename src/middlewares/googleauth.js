const passport = require("../auth/google-auth");
module.exports = passport.authenticate("google", { scope: ["email", "profile"] });
