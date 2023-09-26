const { deleteUser } = require('../../controllers/UserControllers');
const { response, ErrorResponse } = require('../../utils');
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deleting = await deleteUser(id);
    // res.send('user deleted');
    response(res, 200, { message: 'User deleted' });
  } catch (error) {
    // res.status(404).send({
    //   error: true,
    //   message: error.message ?? 'Error in server.',
    // });
    ErrorResponse(res, 404, error);
  }
};
