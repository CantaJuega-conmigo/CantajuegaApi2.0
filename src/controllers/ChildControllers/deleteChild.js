const { Child } = require("../../DB");

module.exports = async (id) => {
  try {
    const deleteChild = await Child.destroy({
      where: {
        id: id,
      },
    });
    return deleteChild;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server delete");
  }
};
