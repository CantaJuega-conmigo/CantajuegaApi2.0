const passport = require("../auth/google-auth");
module.exports=passport.authenticate("google")//callback que maneja el registro/login de google