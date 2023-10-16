const { response, ErrorResponse } = require('../../utils');
const { FRONT_DOMAIN } = process.env;

module.exports = (req, res) => {
  try {

    // res.cookie('accesscookie', '', {
    //   expires:new Date(0)
    // });

    res.cookie('accesscookie','',{
      expires:new Date(0),
      httpOnly:true,
      sameSite:'none',
      secure:true,
      domain:'joadev.com.ar',
    })
    response(res, 200, { message: 'Se ha deslogueado con exito en produccion 13.' });
  } catch (error) {
    //  res.status(401).send({
    //    error: true,
    //    message: error.message ?? 'server failed.',
    //  });
    console.log(error);
    ErrorResponse(res, 401, error);
  }
};
