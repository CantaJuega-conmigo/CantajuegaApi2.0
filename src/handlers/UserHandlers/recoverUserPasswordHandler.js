const { recoverUserPassword } = require("../../controllers/UserControllers");
const { generateOtpCode } = require("../../helpers/AuthHelpers");
const { ErrorResponse, response } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { recover, email } = req.query;
    if (recover !== "yes") throw new Error("Invalid option.");
    const code = await generateOtpCode();
    const userexists = await recoverUserPassword(email, code);

    return response(res, 200, {
      message:
        "Hemos enviado un codigo de 6 digitos a su correo electronico,ingreselo a continuacion",
    });
  } catch (error) {
    ErrorResponse(res, 400, error);
  }
};
