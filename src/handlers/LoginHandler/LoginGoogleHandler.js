const { createToken } = require("../../auth");
const { createUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");
const { FRONT_DOMAIN ,FRONT_URL} = process.env;
module.exports = async (req, res) => {
  try {
    const newUser = await createUser(req.user);
    const token = createToken(newUser, "1d");
    res.cookie("accesscookie",token, {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      secure: true,
      httpOnly: true,
      domain: FRONT_DOMAIN,
    });
    res.redirect(FRONT_URL);// to do , redirect to register child page
  } catch (error) {
    ErrorResponse(res, 401, error);
  }
}; 
