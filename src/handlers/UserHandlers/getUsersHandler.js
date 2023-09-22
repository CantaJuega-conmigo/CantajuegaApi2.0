const { getUsers } = require('../../controllers/UserControllers');
const { response, ErrorResponse } = require('../../utils');
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const users = !id ? await getUsers() : await getUsers(id);
    // res.status(200).send(users);
    response(res, 200, { data: users });
  } catch (error) {
    // res
    //   .status(404)
    //   .send({ error: true, message: error.message ?? 'Error in server.' });
    ErrorResponse(res, 404, error);
  }
};
