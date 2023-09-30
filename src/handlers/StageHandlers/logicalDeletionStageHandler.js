const { logicalDeletionStage } = require("../../controllers/StageControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, message } = await logicalDeletionStage(id);
    if (status) return response(res, 200, { message });
  } catch (error) {
    return ErrorResponse(res,400,error)
  }
};
