const jswt = require("jsonwebtoken");
const secret = "SECRETO";
module.exports = (tokenvalue) => {
  const token = tokenvalue?.slice(7, tokenvalue.length);
  if (!token) {
    return {
      error: true,
      auth:false,
 
    };
  }
  if (token) {
    return jswt.verify(token, secret, (error, decoded) => {
      if (error) {
        return {
          error: true,
          auth:false,

        };
      } else {
        return {
          error:false,
          auth: true,
          decoded: decoded,
        };
      }
    });
  }
};
