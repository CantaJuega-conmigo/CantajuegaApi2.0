const { Progress } = require("../../DB");
const { allowFirstVideo } = require("../../utils/progressControls");
const {getUsers}=require('../UserControllers')
module.exports = async (id, newData, select) => {
  try {
    const ActualProgress = await Progress.findByPk(id);
    const isChildExists=await getUsers(ActualProgress.ChildId)
    
    if(!isChildExists){//si no existe el child tiramos error
      throw new Error('Child not exists.')
    }
    if(select==='First_Video'){
      console.log('logica aqui');
      allowFirstVideo(ActualProgress.dataValues,newData)
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
