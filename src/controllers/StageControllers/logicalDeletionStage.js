const { Child } = require("../../DB");
const logicalDeletion = require("../../helpers/logicalDeletion");
module.exports = async (id) => {
  try {
    const deleted = await logicalDeletion(Child, id, {
      message1: null,
      message2: null,
    });
    return deleted;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionStage': ${error.message}`
    );
  }
};
