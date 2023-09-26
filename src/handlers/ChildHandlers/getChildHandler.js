const {
  getChild,
  getChildById,
} = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const child = id ? await getChildById(id) : await getChild();
    // res.status(200).send(child);
    response(res, 200, { data: child });
  } catch (error) {
    console.log(error);
    // return res
    //   .status(500)
    //   .json({ error: true, message: error.message ?? 'Error in the server' });
    return ErrorResponse(res, 500, error);
  }
};
