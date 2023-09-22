// const { logicalDeletionUser } = require("../../controllers/UserControllers/logicalDeletionUser");
const { logicalDeletionUser } = require('../../controllers/UserControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await logicalDeletionUser(id);
    // res.send({ message: 'User local deletion' });
    response(res, 200, { message: 'User local deletion' });
  } catch (error) {
    // res.send({ message: e.message });
    ErrorResponse(res, 500, error);
  }
};
