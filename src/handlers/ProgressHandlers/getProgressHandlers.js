const { getProgress } = require("../../controllers/ProgressControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { select } = req.query;
  try {
    if (id && !select) {
      const Progress = await getProgress(id);
      return response(res, 200, { data: Progress });
    }
    if (select && id) {
      const result = await getProgress(id, select);
      if (!result[select]) throw new Error("Not found");

      return response(res, 200, { data: result[select] });
    }
    const Progress = await getProgress();

    return response(res, 200, { data: Progress });
  } catch (error) {
    return ErrorResponse(res, 404, error);
  }
};
