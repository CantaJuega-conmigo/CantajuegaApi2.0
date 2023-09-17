const { changeUserPassword } = require("../../controllers/UserControllers");
const { ErrorResponse, response, hashpassword } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { email, newpassword, password, SegurityCode } = req.body;

    const passwordhashed = await hashpassword(newpassword);

    const passwordchanged = password
      ? await changeUserPassword(email, passwordhashed, password)
      : await changeUserPassword(email, passwordhashed, null, SegurityCode);
    if (passwordchanged)
      return response(res, 200, {
        message: "La contraseña se ha cambiado con exito.",
      });
  } catch (error) {
    return ErrorResponse(res, 401, error);
  }
};
