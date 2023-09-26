const { updateUser } = require("../../controllers/UserControllers");
const { ErrorResponse, response } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const userEdited = await updateUser(body, id);
    if (userEdited)
      return response(res, 200, {
        message: "Datos actualizados correctamente",
      });
  } catch (error) {
    ErrorResponse(res, 400, error);
  }
};
