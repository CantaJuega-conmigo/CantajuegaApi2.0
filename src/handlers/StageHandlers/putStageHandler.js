const {
  putStage,
  editContentStage,
} = require("../../controllers/StageControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const stageId = req.params.id;
    const newData = req.body;
    const { content: contentQuery, order: orderQuery } = req.query;
    if (contentQuery && contentQuery !== "videos" && contentQuery !== "music") {
      throw new Error("Invalid query");
    }
    if (contentQuery && !orderQuery) {
      throw new Error("missing orderQuery");
    }
    const { order, content, title } = req.body;
    const newContent = { order, content, title };
    const updated = !contentQuery
      ? await putStage(stageId, newData)
      : await editContentStage(stageId, contentQuery, newContent, orderQuery);
    return response(res, 200, { data: updated });
  } catch (error) {
    return ErrorResponse(res, 400, error);
  }
};
