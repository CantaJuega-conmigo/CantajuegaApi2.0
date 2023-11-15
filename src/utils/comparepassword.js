const bcrypt = require("bcryptjs");
module.exports = async (password, passwordhash) => {
  try {
    const compare = await bcrypt.compare(password, passwordhash);
    return compare;
  } catch (error) {
    throw error;
  }
};
