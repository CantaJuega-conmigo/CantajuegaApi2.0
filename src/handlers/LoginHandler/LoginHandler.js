const { loginController } = require('../../controllers/LoginControllers');
const { FRONT_DOMAIN } = process.env;
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const login = await loginController(req.body);
    const { token } = login;

    res.cookie('accesscookie', token, {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      domain:FRONT_DOMAIN,
    });
    // res.send(login);
    response(res, 200, { data: login });
  } catch (error) {
    // res.status(404).send(error.message);
    ErrorResponse(res, 404, error);
  }
};
