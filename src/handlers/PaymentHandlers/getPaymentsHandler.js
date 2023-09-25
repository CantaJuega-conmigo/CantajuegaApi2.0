const { getPayments } = require("../../controllers/PaymenControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = id ? await getPayments(id) : await getPayments();
    response(res, 200, { data: payment });
  } catch (error) {
    ErrorResponse(res,400,error)
  }
};
