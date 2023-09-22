const { response, ErrorResponse } = require('../../utils');

module.exports = (req, res) => {
  try {
    res.clearCookie('accesscookie');
    //  res.send({
    //    error:false,
    //    message:'Se ha deslogueado con exito'
    //  })
    response(res, 200, { message: 'Se ha deslogueado con exito' });
  } catch (error) {
    //  res.status(401).send({
    //    error: true,
    //    message: error.message ?? 'server failed.',
    //  });
    ErrorResponse(res, 401, error);
  }
};
