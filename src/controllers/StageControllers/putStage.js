const { Stage } = require("../../DB");

module.exports = async (id, newData) => {
  try {
    const updateStage = await Stage.update(newData, {
      where: {
        id: id,
      },
    });
    return updateStage;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server Put");
  }
};
