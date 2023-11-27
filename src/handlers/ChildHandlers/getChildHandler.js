const {
  getChild,
  getChildById,
} = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { exclude } = req.query;
    const childResults = id ? await getChildById(id) : await getChild(exclude);
    // res.status(200).send(childResults);
    response(res, 200, { data: childResults });
  } catch (error) {
    console.log(error);
    // return res
    //   .status(500)
    //   .json({ error: true, message: error.message ?? 'Error in the server' });
    return ErrorResponse(res, 500, error);
  }
};
