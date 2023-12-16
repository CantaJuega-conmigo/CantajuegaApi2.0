const { createToken } = require("../../auth");
const { createUser } = require("../../controllers/UserControllers");
const { response, ErrorResponse } = require("../../utils");
const { User } = require("../../DB");
const { FRONT_DOMAIN, FRONT_URL } = process.env;
module.exports = async (req, res) => {
  try {
    const userExist = await User.findOne({
      where: { email: req.user.email },
      include: ["Children", "Reports", "Membership"],
    });
    const user = userExist ? userExist : await createUser(req.user);
    const token = createToken(user, "1d");
    if (!user?.Children?.length) {
      const idEncoded = Buffer.from(user.id).toString("base64");
      const json = JSON.stringify({ user: user.firstName, id: idEncoded });
      res.cookie("register", json, {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
        httpOnly: true,
        domain: FRONT_DOMAIN,
      });
      return res.redirect(`${FRONT_URL}/register/child`); //redirect if the user hasn't children
    } else if (user?.Children?.length) {
      //para cuando ya tiene hijos registrados
      res.cookie("accesscookie", token, {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
        httpOnly: true,
        domain: FRONT_DOMAIN,
      });
      return res.redirect(FRONT_URL); //
    }
  } catch (error) {
    ErrorResponse(res, 401, error);
  }
};
