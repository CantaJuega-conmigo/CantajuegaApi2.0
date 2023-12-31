const { getMembership } = require('../../controllers/MembershipContollers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const {id}=req.params;
    const membership = !id ? await getMembership():await getMembership(id);
    // res.send(membership);
    response(res, 200, { data: membership });
  } catch (error) {
    // res.send('Erro in the server');
    ErrorResponse(res, 500, error);
  }
};
