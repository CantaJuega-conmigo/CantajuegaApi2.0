const { response, ErrorResponse } = require('../../utils');

module.exports = (req, res) => {
  try {
    res.cookie('accesscookie', '', {
      expires:new Date(0)
    });
    console.log('me deslogueo de ',req.cookies.accesscookie);
    response(res, 200, { message: 'Se ha deslogueado con exito' });
  } catch (error) {
    //  res.status(401).send({
    //    error: true,
    //    message: error.message ?? 'server failed.',
    //  });
    console.log(error);
    ErrorResponse(res, 401, error);
  }
};
