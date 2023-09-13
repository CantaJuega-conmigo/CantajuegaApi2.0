const { validateToken, validateCookie } = require("../auth");
module.exports = async (req, res, next) => {
  try {
    
    const iscookievalide = await validateCookie(req);

    if (iscookievalide.error || !iscookievalide.auth) {
      throw new Error("Page not found,auth required");
    }

    next();
  } catch (error) {
    res.status(401).send({
      error: true,
      message: error.message,
    });
  }
};
