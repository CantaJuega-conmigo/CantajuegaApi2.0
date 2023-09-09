const { validateToken } = require("../../auth");
module.exports = (req) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  const validateresult = validateToken(token);
  const isTokenExists = token && token !== "Bearer";
  const isUserAdmin = validateresult.decoded.user.is_Admin;
  if (validateresult.error || !isTokenExists) {
    return false
  }
  if (!isUserAdmin) {
   return false
  }
  return isUserAdmin
};
