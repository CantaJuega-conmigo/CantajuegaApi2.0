const { createMembership } = require('../../controllers/MembershipContollers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    await createMembership(req.body);
    // console.log('ENTRE HANDLE');
    // res.send({ message: 'Membership created' })
    response(res, 200, { message: 'Membership created' });
    // return await membership;
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
