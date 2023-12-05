const validateToken = require("./validatetoken");
module.exports = async (req) => {
  //usada automaticamente en algunas rutas como middleware.
  //aqui validamos que venga una cookie, a diferencia de validateAuth, este se en un middleware para que el usuario acceda a ciertas rutas
  const { accesscookie } = req.cookies;
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
