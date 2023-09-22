const { verifyEmailUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { email, code } = req.query;
    const isCorrectCode = await verifyEmailUser(email, code);
    if (!isCorrectCode) throw new Error();
    console.log('en handler')
    return response(res, 200, { message: "Correo verificado con exito!." });
  } catch (error) {
    return ErrorResponse(res, 400, error);
  }
};
