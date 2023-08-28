const { loginController } = require("../../controllers/LoginControllers");

module.exports = async (req, res) => {
  try {
    const login = await loginController(req.body);
    res.send(login);
  } catch (error) {
    error.message = "Usuario o contraseña incorrecta.";
    res.status(404).send(error.message);
  }
};
