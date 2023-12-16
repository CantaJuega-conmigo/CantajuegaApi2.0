const { createChild } = require("../../controllers/ChildControllers");
const { response, ErrorResponse } = require("../../utils");
const { FRONT_DOMAIN } = process.env;
module.exports = async (req, res) => {
  try {
    const { register } = req.cookies;
    const object = JSON.parse(register);
    const DecodedId = Buffer.from(object.id, "base64").toString();
    const { child } = req.body;
    const googleRegister = DecodedId ? true : false;

    if (googleRegister) {
      child.UserId = DecodedId;
      const { token, user } = await createChild(child, googleRegister);
      res.cookie("accesscookie", token, {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
        httpOnly: true,
        domain: FRONT_DOMAIN,
      });
      return response(res, 201, { data: user });
    }
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
