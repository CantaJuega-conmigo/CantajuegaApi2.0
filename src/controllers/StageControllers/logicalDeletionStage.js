const { Stage } = require("../../DB");
const logicalDeletion = require("../../helpers/logicalDeletion");
module.exports = async (id) => {

  try {
    const deleted = await logicalDeletion(Stage, id, {
      message1: null,
      message2: null,
    });
    console.log(deleted);
    return deleted;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionStage': ${error.message}`
    );
  }
};
