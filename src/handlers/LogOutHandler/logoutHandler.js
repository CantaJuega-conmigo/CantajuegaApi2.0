const { response, ErrorResponse } = require('../../utils');
const { FRONT_DOMAIN } = process.env;

module.exports = (req, res) => {
  try {

    res.cookie('accesscookie','',{
      expires:new Date(0),
      httpOnly:true,
      sameSite:'none',
      secure:true,
      domain:FRONT_DOMAIN,
    })
    response(res, 200, { message: 'Se ha deslogueado con exito.' });
  } catch (error) {
    console.log(error);
    ErrorResponse(res, 401, error);
  }
};
