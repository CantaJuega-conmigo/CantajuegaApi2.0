const { User } = require("../../DB");

module.exports = async (id) => {
  try {
    const allUsers = !id
      ? await User.findAll({
          include: ["Children", "Membership"],
          attributes: {
            exclude: ["password"],
          },
        })
      : await User.findByPk(id, {
          include: ["Children", "Membership"],
          attributes: {
            exclude: ["password"],
          },
        });
    
    return allUsers;
  } catch (error) {
    throw error;
  }
};
