const { User } = require("../../DB");
module.exports = async (id) => {
  try {
    const deleteUser = await User.destroy({ where: { id: id } });
    if (!deleteUser) {
      throw new Error("Resquest failed.");
    }
    return deleteUser;
  } catch (error) {
    throw error;
  }
};
