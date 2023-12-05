const { validateCookie } = require("../auth");
const { ErrorResponse } = require("../utils");
module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.accesscookie;
    if (!token) throw new Error("Must be logged in");

    const validateresult = await validateCookie(req);

    const userinfo = validateresult.decoded?.user;
    if (!userinfo) throw new Error("Must be logged in");
    if (userinfo.is_Admin) return next();
    if (userinfo.Membership.name !== "Canta conmigo")
      throw new Error("Must be a music member");
    next();
  } catch (error) {
    return ErrorResponse(res, 401, error);
  }
};
