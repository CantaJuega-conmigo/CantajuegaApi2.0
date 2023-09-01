const { createUser } = require("../../controllers/UserControllers");
const {UniqueConstraintError}=require('sequelize')
module.exports = async (req, res) => {
  try {
    const info = await createUser(req.body);
    res.status(201).send(info);
    
  } catch (error) {
    if(error instanceof UniqueConstraintError){
      res.status(406).send('Este correo ya se encuentra en uso, por favor utilice otro.')
    }else{
       res.status(500).send( 'ERROR SERVER.')
    }
  }
};
