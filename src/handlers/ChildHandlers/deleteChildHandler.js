const { deleteChild } = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.body;
  try {
    const deleted = await deleteChild(id);
    // res.status(200).json({ message: "stage deleted", deleted });
    response(res, 200, { message: 'Stage deleted, deleted' });
  } catch (error) {
    console.log(error);
    // res.status(500).send('Error in the server');
    ErrorResponse(res, 500, error);
  }
};
