const { validateCookie } = require("../../auth");
module.exports = async (req) => {
  try {
    const token = req.cookies.accesscookie;
    const validateresult = await validateCookie(req);
    const isTokenExists = token ? true : false;
    const isUserAdmin = validateresult.decoded?.user.is_Admin;
    if (validateresult.error || !isTokenExists || !validateresult.auth) {
      throw new Error('Only Admin can access here.')
    }
    if (!isUserAdmin) {
      throw new Error('Only Admin can access here.')
    }
    return isUserAdmin;
  } catch (error) {
    throw error;
  }
};
