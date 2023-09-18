const { createToken } = require("../../auth");
const { createUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const token = createToken(req.user, "1d");
    const newUser = await createUser(req.user);
    response(res, 200, {
      message: "login con exito, google te gane xd.",
      data: newUser,
    });
  } catch (error) {
    ErrorResponse(res, 401, error);
  }
};
