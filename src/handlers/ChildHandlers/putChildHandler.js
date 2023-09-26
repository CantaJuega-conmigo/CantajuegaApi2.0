const { putChild } = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const ChildId = req.params.id;
  const newData = req.body;

  try {
    const updated = await putChild(ChildId, newData);
    // res.status(200).json(updated);
    response(res, 200, { data: updated });
  } catch (error) {
    console.log(error);
    // res.status(500).send('Error in the server');
    ErrorResponse(res, 500, error);
  }
};
