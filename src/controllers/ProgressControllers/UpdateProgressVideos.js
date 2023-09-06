const { Progress } = require("../../DB");
const { allowFirstVideo ,allowOtherVideos,completeVideo} = require("../../utils/progressControls");
const {getUsers}=require('../UserControllers')
module.exports = async (id, newData, select) => {
  try {
    const ActualProgress = await Progress.findByPk(id);
    const isChildExists=await getUsers(ActualProgress.ChildId)
    
    if(!isChildExists){//si no existe el child tiramos error
      throw new Error('Child not exists.')
    }
    if(select==='First_Video'){
      allowFirstVideo(ActualProgress.dataValues,newData)
    }
    if(select !=='First_Video' && select!=='Last_Video'){
      allowOtherVideos(ActualProgress,select)
    }
    const allowNextVideo=await completeVideo(ActualProgress,newData,select,id,Progress)
    return allowNextVideo
  } catch (error) {
    throw error
  }
};
