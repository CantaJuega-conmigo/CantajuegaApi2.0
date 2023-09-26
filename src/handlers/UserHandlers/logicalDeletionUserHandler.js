// const { logicalDeletionUser } = require("../../controllers/UserControllers/logicalDeletionUser");
const { logicalDeletionUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, message } = await logicalDeletionUser(id);
    if (status) {
      return response(res, 200, { message });
    }
  } catch (error) {
    // res.send({ message: e.message });
    ErrorResponse(res, 500, error);
  }
};
