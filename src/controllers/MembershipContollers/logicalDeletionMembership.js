const { Membership } = require('../../DB');
const  logicalDeletion=require('../../helpers/logicalDeletion')
module.exports = async (id) => {
  try {
      const deleted=await  logicalDeletion(Membership,id,{message1:null,message2:null});
      return deleted
  } catch (error) {
    throw new Error(
      `Error en el servidor 'logicalDeletionMembership': ${error.message}`
    );
  }
};
