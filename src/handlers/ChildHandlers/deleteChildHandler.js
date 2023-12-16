const { deleteChild } = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.body;
  try {
    const deleted = await deleteChild(id);
    response(res, 200, { message: 'Stage deleted, deleted' });
  } catch (error) {

    ErrorResponse(res, 500, error);
  }
};
