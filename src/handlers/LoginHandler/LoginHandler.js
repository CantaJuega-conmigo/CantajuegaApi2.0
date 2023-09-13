const { loginController } = require("../../controllers/LoginControllers");

module.exports = async (req, res) => {

  try {
    const login = await loginController(req.body);
  
    res.cookie('accesscookie',login.token,{
      maxAge:100000
    })
    res.send(login);
  } catch (error) {
 
    res.status(404).send(error.message);
  }
};
