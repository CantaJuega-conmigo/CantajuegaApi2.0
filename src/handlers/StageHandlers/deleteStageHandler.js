const { deleteStage } = require('../../controllers/StageControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteStage(id);
    response(res, 200, { message: 'Stage Borrado', data: deleted });
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
