const { Child } = require("../../DB");
const logicalDeletion = require("../../helpers/logicalDeletion");
module.exports = async (id) => {
  try {
    const messages={message1:'Se borro temporalmente.',message2:"Se recuperaron los datos con exito."}
    const deleted = await logicalDeletion(Child, id,messages);
    return deleted;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionChild': ${error.message}`
    );
  }
};
