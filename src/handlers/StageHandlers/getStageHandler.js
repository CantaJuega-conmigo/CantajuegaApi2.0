const {
  getStage,
  getStageById,
} = require("../../controllers/StageControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { childs } = req.query;
  const { id } = req.params;
  const getChilds = childs === "yes";
  try {
    const result = !id
      ? await getStage(getChilds)
      : await getStageById(id, childs);
    response(res, 200, { data: result });
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
