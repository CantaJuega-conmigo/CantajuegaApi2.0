const { loginController } = require("../../controllers/LoginControllers");

module.exports = async (req, res) => {
  try {
    const login = await loginController(req.body);
    const { token } = login;
    
    res.cookie("accesscookie", token, {
      maxAge:24 * 60 * 60 * 1000,
      sameSite:'lax',
      secure:true,
      httpOnly:true
    });
    res.send(login);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
