const { response, ErrorResponse } = require('../../utils');
const { FRONT_DOMAIN } = process.env;

module.exports = (req, res) => {
  try {

    res.cookie('accesscookie', '', {
      expires:new Date(0)
    });
    res.clearCookie('accesscookie',{
      httpOnly:true,
      sameSite:'none',
      secure:true
    })
    res.clearCookie('accescookie',{
      httpOnly:true,
      sameSite:'strict',
      secure:true,
      domain: FRONT_DOMAIN,
    })
    res.clearCookie('accescookie',{
      httpOnly:true,
      sameSite:'lax',
      secure:true,
      domain: FRONT_DOMAIN,
    })
    res.clearCookie('accescookie',{
      httpOnly:true,
      sameSite:'lax',
      secure:true,
      domain:'www.api.joadev.com.ar',
    })
    response(res, 200, { message: 'Se ha deslogueado con exito en produccion 5.' });
  } catch (error) {
    //  res.status(401).send({
    //    error: true,
    //    message: error.message ?? 'server failed.',
    //  });
    console.log(error);
    ErrorResponse(res, 401, error);
  }
};
