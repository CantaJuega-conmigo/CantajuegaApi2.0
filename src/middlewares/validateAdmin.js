const { validateToken } = require("../auth");
const { verifyIsAdmin } = require("../helpers/AuthHelpers");
module.exports = async(req, res, next) => {
  try {
    const isAdmin =await verifyIsAdmin(req);
    if (!isAdmin) throw new Error("Acces deneged.");
    next();
  } catch (error) {
    res.status(401).send({
      error: true,
      message: error.message,
    });
  }
};
