const { Progress } = require('../../DB');
// const { AllowFirstVideo ,AllowOtherVideos} = require("../../utils/progressControls");
const { getUsers } = require('../UserControllers');
const {
  CompleteVideos,
  AllowFirstVideo,
  AllowOtherVideos,
} = require('../../helpers/ProgressHelpers');

module.exports = async (id, newData, select) => {
  try {
    const ActualProgress = await Progress.findByPk(id);
    const isChildExists = await getUsers(ActualProgress.ChildId);

    if (select === 'First_Video') {
      AllowFirstVideo(ActualProgress.dataValues, newData);
      const allowNextVideo = await CompleteVideos(
        ActualProgress,
        newData,
        select,
        id,
        Progress
      );
      return allowNextVideo;
    }

    // if(select==='Final_Video'){
    //   AllowOtherVideos(ActualProgress,select)
    //   const allowNextVideo=await completeVideo(ActualProgress,newData,select,id,Progress)
    //   return allowNextVideo
    // }

    if (select !== 'First_Video') {
      AllowOtherVideos(ActualProgress, select);
      const allowNextVideo = await CompleteVideos(
        ActualProgress,
        newData,
        select,
        id,
        Progress
      );
      return allowNextVideo;
    }
  } catch (error) {
    throw new Error(
      `Error en el servidor 'UpdateProgressVideos': ${error.message}`
    );
  }
};
