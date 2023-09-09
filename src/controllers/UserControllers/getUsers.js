const { User } = require("../../DB");

module.exports = async (id) => {
  try {
    const allUsers = !id
      ? await User.findAll({
          include: ["Children", "Membership",'Reports'],
          attributes: {
            exclude: ["password"],
          },
        })
      : await User.findByPk(id, {
          include: ["Children", "Membership",'Reports'],
          attributes: {
            exclude: ["password"],
          },
        });
    if(!allUsers){
        throw new Error('User not found.Resquest failed.')
    }
    return allUsers;
  } catch (error) {
    throw error;
  }
};
