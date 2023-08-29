const { Stage } = require("../../DB");

module.exports = async (id) => {
  try {
    const deleteStage = await Stage.destroy({
      where: {
        id: id,
      },
    });
    return deleteStage;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server delete");
  }
};
