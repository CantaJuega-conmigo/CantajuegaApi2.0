const { Progress } = require("../../DB");
const {getUsers}=require('../UserControllers')
const {validateProgressSection}=require('../../utils')
module.exports = async (id, newData, select) => {
  try {
    const ActualProgress = await Progress.findByPk(id);
    const isChildExists=await getUsers(ActualProgress.ChildId)
    const isCorrectSelect=select in ActualProgress
    
    if(!isChildExists){//si no existe el child tiramos error
      throw new Error('Child not exists.')
    }
    
    if(!isCorrectSelect){//si no existe la propiedad en la tabla progress tiramos error
      throw new Error('Error in the server')
    }
    const validateAtributtes= validateProgressSection(newData,select)//devuelve true/false o genera errores.
    if(!validateAtributtes){//validamos que la informacion que llega tenga atributos validos dependiendo la informacion a cambiar
      throw new Error('Error in the server')
    }
    const newProgress = {///y si todo va bien hacemos cambios
      ...ActualProgress,
      [select]: newData,
    };

    const updateProgress = await Progress.update(newProgress, {///guardamos los cambios en la db
      where: {
        id: id,
      },
    });
    return updateProgress;
  } catch (error) {
    throw error
  }
};
