const { changeUserPassword } = require("../../controllers/UserControllers");
const { ErrorResponse, response, hashpassword } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { email, newpassword ,password,SegurityCode} = req.body;

    if(!password &&!SegurityCode) throw new Error ('La contraseña actual es necesaria')
    if (!email || !password)
      throw new Error(`${!email ? "El email" : "La contraseña nueva"} es necesario.`);
    const passwordhashed = await hashpassword(newpassword);
    const passwordchanged = await changeUserPassword(email, passwordhashed,password);
    if (passwordchanged)
      return response(res, 200, {
        message: "La contraseña se ha cambiado con exito.",
      });
  } catch (error) {
    return ErrorResponse(res, 401, error);
  }
};
