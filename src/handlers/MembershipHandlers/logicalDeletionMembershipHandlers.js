const {
  logicalDeletionMembership,
} = require('../../controllers/MembershipContollers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await logicalDeletionMembership(id);
    // res.send({ message: 'Membership local deletion' });
    response(res, 200, { message: 'Membership local deletion' });
  } catch (error) {
    // res.send({ message: e.message });
    ErrorResponse(res, 500, error);
  }
};
