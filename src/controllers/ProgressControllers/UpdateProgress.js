const { Progress } = require("../../DB");
const { validateProgressAtributtes } = require("../../utils");
const getObjectAtributtes = require("../../utils/getObjectAtributtes");
const { getUsers } = require("../UserControllers");

module.exports = async (id, newData) => {
  const progress = await Progress.findByPk(id);
  const isChildExists = await getUsers(progress.ChildId);
  try {
    if (!isChildExists) {
      //si no existe el child tiramos error
      throw new Error("Child not exists.");
    }

    const UpdateResults = await Progress.update(newData, {
      where: {
        id: id,
      },
    });
    return UpdateResults;
  } catch (error) {
    throw error;
  }
};
