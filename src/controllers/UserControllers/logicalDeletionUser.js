const { User } = require("../../DB");
const logicalDeletion = require("../../helpers/logicalDeletion");

module.exports = async (id) => {
  try {
   const messages={message1:'El usuario fue borrado temporalmente.',message2:"El usuario fue restaurado con exito."}
   const deleted=await logicalDeletion(User,id,messages)
   return deleted
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionUser': ${error.message}`
    );
  }
};
