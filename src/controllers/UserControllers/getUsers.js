const { User } = require("../../DB");

module.exports = async (id) => {
  console.log(id);

  const allUsers = !id
    ? await User.findAll({ include: "Children" })
    : await User.findByPk(id, { include: "Children" });
  return allUsers;
};
