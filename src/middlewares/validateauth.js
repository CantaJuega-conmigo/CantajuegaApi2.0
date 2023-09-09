const { validateToken } = require("../auth");
module.exports = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    const validateresult = validateToken(token);
    const isTokenExists = token && token === "Bearer";

    if (validateresult.error && isTokenExists) {
      throw new Error("Page not found,auth required");
    }
    if (validateresult.error && !validateresult.auth) {
      throw new Error("Access deneged, auth failed.");
    }
    next();
  } catch (error) {
    res.status(401).send({
      error: true,
      message: error.message,
    });
  }
};
