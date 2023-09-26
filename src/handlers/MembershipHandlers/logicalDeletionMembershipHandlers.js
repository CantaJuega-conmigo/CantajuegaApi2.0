const {
  logicalDeletionMembership,
} = require("../../controllers/MembershipContollers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, message } = await logicalDeletionMembership(id);
    // res.send({ message: 'Membership local deletion' });
    if (status) return response(res, 200, { message });
  } catch (error) {
    // res.send({ message: e.message });
    ErrorResponse(res, 500, error);
  }
};
