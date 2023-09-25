const { createPayment } = require("../../controllers/PaymenControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const data = req.body;
    const newpayment = await createPayment(data);
    console.log(newpayment);
    if (newpayment) {
      response(res, 200, {message:'El checkout se creo correctamente'});
    }
  } catch (error) {
    ErrorResponse(res,400,error)
  }
};
