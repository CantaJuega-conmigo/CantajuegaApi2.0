const { registerUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");
const { FRONT_DOMAIN } = process.env;
module.exports = async (req, res) => {
  try {
    const { user, child } = req.body;
    const info = await registerUser(user, child);
    res.cookie("accesscookie", info.token, {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      secure: true,
      httpOnly: true,
      domain: FRONT_DOMAIN,
    });
    return response(res, 201, { data: info });
  } catch (error) {
    return ErrorResponse(res, 401, error);
  }
};
