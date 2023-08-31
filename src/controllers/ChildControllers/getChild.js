const { Child, User, Stage } = require("../../DB");

module.exports = async () => {
  try {
    const allChild = await Child.findAll({
      include: [User, Stage],
    });
    return allChild;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server get");
  }
};
