const { User } = require("../../DB");

module.exports = async (id) => {
  const allUsers = !id
    ? await User.findAll({ include: ["Children", 'Membership'] })
    : await User.findByPk(id, { include: ["Children", 'Membership'] });
  return allUsers;
};
