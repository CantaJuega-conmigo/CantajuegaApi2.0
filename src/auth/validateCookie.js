const validateToken = require("./validatetoken");
module.exports = async (req) => {
  const { accesscookie } = req.cookies;
  console.log('en validate cookie',accesscookie);
  const isCookieExists = accesscookie ? true : false;
  const CookieContentIsValide = validateToken(accesscookie);

  if (isCookieExists && CookieContentIsValide) {
    return CookieContentIsValide;
  } else {
    return {
      error: true,
      auth: false,
    };
  }
};
