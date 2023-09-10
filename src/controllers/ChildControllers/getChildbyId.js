const { Child } = require("../../DB");
module.exports = async (id) => {
    if (!id) throw new Error("Resquest failed.");
  try {
    const child = await Child.findByPk(id);
    if (!child) throw new Error("Resquest failed.Child not found");
    return child;
  } catch (error) {
    throw error;
  }
};
