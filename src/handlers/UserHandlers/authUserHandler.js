const { validateAuthUser } = require('../../auth');
const { response, ErrorResponse } = require('../../utils');
module.exports = async (req, res) => {
  try {
    const isUserAuth = await validateAuthUser(req);
    // res.send(isUserAuth);
    response(res, 200, { data: isUserAuth });
  } catch (error) {
    res.clearCookie('accesscookie');
    // res.status(401).send({
    //   error: true,
    //   message: 'Auth failed.Access deneged.',
    // });
    ErrorResponse(res, 401, error);
  }
};
