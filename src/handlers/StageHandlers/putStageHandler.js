const { putStage } = require('../../controllers/StageControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const stageId = req.params.id;
  const newData = req.body;

  try {
    const updated = await putStage(stageId, newData);
    // res.status(200).json(updated);
    response(res, 200, { data: updated });
  } catch (error) {
    // res.status(500).send('Error in the server');
    ErrorResponse(res, error, error);
  }
};
