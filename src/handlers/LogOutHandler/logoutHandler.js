const { response, ErrorResponse } = require('../../utils');
const { FRONT_DOMAIN } = process.env;

module.exports = (req, res) => {
  try {

    res.cookie('accesscookie', '', {
      expires:new Date(0)
    });
    response(res, 200, { message: 'Se ha deslogueado con exito. '});
  } catch (error) {
    ErrorResponse(res, 401, error);
  }
};
