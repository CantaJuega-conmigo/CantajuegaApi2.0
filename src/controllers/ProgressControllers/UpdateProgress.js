const { Progress } = require("../../DB");
const {getUsers}=require('../UserControllers')
const {validateProgressSection}=require('../../utils')
module.exports = async (id, newData, select) => {
  try {
    const ActualProgress = await Progress.findByPk(id);
    const isChildExists=await getUsers(ActualProgress.ChildId)
    const isCorrectSelect=select in ActualProgress
    
    if(!isChildExists){
      throw new Error('Child not exists.')
    }
    
    if(!isCorrectSelect){
      throw new Error('Error in the server')
    }
    const validateAtributtes= validateProgressSection(newData,select)
    if(!validateAtributtes){
      throw new Error('Error in the server')
    }
    const newProgress = {
      ...ActualProgress,
      [select]: newData,
    };

    const updateProgress = await Progress.update(newProgress, {
      where: {
        id: id,
      },
    });
    return updateProgress;
  } catch (error) {
    throw error
  }
};
