const { Child } = require("../../DB");

module.exports = async (id, newData) => {
  try {
    const updateChild = await Child.update(newData, {
      where: {
        id: id,
      },
    });
    return updateChild;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server Put");
  }
};
