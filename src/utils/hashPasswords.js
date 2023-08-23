const bcrypt = require("bcryptjs");
module.exports = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  return hash;
};
