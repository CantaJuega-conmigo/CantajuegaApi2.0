const { daleteMembership } = require('../../controllers/MembershipContollers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await daleteMembership(id);
    // res.send({ message: 'Membership deleted' });
    response(res, 200, { message: 'Membership deleted' });
  } catch (error) {
    // res.send({ message: e.message });
    ErrorResponse(res, 500, error);
  }
};
