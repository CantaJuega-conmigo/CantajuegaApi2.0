const getObjectAtributtes = require("./getObjectAtributtes");


const completePdf=async(updatedProgress,ProgressModel,id)=>{
  const isPdfCompleted=updatedProgress.dataValues.Pdf_Viewed;
  if(isPdfCompleted){
      const nextProgress=updatedProgress.dataValues.First_Video;
      nextProgress.PdfCompleted=true;
      const newProgress = {///y si todo va bien hacemos cambios
        ...updatedProgress,
        First_Video: nextProgress,
      };
      const finalUpdate=await ProgressModel.update(newProgress, {
        where: {
          id: id,
        },
      });
      
      return 'Ya puedes acceder al primer video.'
  }else{
    throw new Error('No se puede actualizar el estado, ya que el pdf ya fue visto anteriormente.')
  }
}
//////////////////////////////////////////////////////////////////////////
const allowFirstVideo = (Progress,newData) => {

  if(!newData.PdfCompleted){
     throw new Error('No es posible actualizar la propiedad')
  }
  if (!Progress.Pdf_Viewed || !Progress.First_Video.PdfCompleted) {
    throw new Error("Debe ver el pdf para acceder al primer videoooo");
  }
};

const allowOtherVideos=(Progress,select)=>{
 
    const properties=getObjectAtributtes(Progress.dataValues);
    console.log(properties);
    const prevProgress=properties[properties.indexOf(select)-1];

    if (!Progress[select].Last_Video_Completed || !Progress[prevProgress].Ready_to_Next_Video) {
        throw new Error(`Debe ver ${prevProgress} para desbloquear ${select}`);
      }
}
module.exports = {
    allowFirstVideo,
    allowOtherVideos,
    completePdf
};
