const {
  logicalDeletionStage,
  addChildStage,
} = require("../../controllers/StageControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.query;
    if (action === "delete") {
      const { status, message } = await logicalDeletionStage(id);
      if (status) return response(res, 200, { message });
    }
    if (action === "addChild") {
      const { childId } = req.body;
      console.log(childId,'de body');
      const status = await addChildStage(childId, id);
      return response(res, 200, { status });
    }
    throw new Error("query action is missing");
  } catch (error) {
    return ErrorResponse(res, 400, error);
  }
};
