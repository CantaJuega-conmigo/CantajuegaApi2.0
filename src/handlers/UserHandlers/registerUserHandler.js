const { createUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");
module.exports = async (req, res) => {
  try {
    const info = await createUser(req.body);
    return response(res, 201, { data: info });
  } catch (error) {
    return ErrorResponse(res, 401, error);
  }
};
