const { createUser, registerUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");
module.exports = async (req, res) => {
  try {
    const {user,child} = req.body
    const info = await registerUser(user,child);
    return response(res, 201, { data: info });
  } catch (error) {
    return ErrorResponse(res, 401, error);
  }
};
