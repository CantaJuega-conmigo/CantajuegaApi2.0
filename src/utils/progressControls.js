const getObjectAtributtes = require("./getObjectAtributtes");


const completePdf=async(updatedProgress,ProgressModel,id)=>{//para cuando el pdf sea marcado como visto y se de acceso a la primer video
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
const completeVideo=async(ActualProgress,newData,select,id,ProgressModel)=>{
  const lastTotal=ActualProgress.dataValues[select].Total;
  const totalRecibed=newData.Total;
  const isCorrectValue=totalRecibed-lastTotal===1
  if(!isCorrectValue){
     throw new Error('No es correcto el valor recibido para actualizar la vista del video')
  }
   if(totalRecibed<=2 &&newData.Ready_to_Next_Video){
      throw new Error('No es posible actualizar el atributo,Ready_to_Next_Video, ya que el video debe tene al menos 2 vistas')
   }
  if(!newData.Ready_to_Next_Video &&ActualProgress[select].Ready_to_Next_Video){
    throw new Error('No es posible actualizar el atributo, ya que el video ya fue visto.')
  }
  if(totalRecibed===2){
    const properties=getObjectAtributtes(ActualProgress.dataValues);//obtenemos los atributos del modelo en general
    const nextProgressName=properties[properties.indexOf(select)+1];//nos quedamos con la propiedad/progreso anterior
    const nextProgress=ActualProgress.dataValues[nextProgressName];
    newData.Ready_to_Next_Video=true
    nextProgress.Last_Video_Completed=true;
    const newProgress = {///y si todo va bien hacemos cambios
      ...ActualProgress,
      [nextProgressName]: nextProgress,
      [select]:newData
    };
    
    const finalUpdate=await ProgressModel.update(newProgress, {
      where: {
        id: id,
      },
    });
    return finalUpdate
  }
    const newProgress = {///y si todo va bien hacemos cambios
      ...ActualProgress,
      [select]: newData,
    };
   
    const updateProgress = await ProgressModel.update(newProgress, {///guardamos los cambios en la db
      where: {
        id: id,
      },
    });
    return updateProgress;
}
//////////////////////////////////////////////////////////////////////////
const allowFirstVideo = (Progress,newData) => {//para prohibir que se pueda modificar el estado de visto del pdf y controlar que el primer video sea visto solo el si el pdf fue abierto.

  if(!newData.PdfCompleted){//newData representa a la info que viene por body, si quieren volver a ponerlo en false tirara un error.
     throw new Error('No es posible actualizar la propiedad')
  }
  if (!Progress.Pdf_Viewed || !Progress.First_Video.PdfCompleted) {//si la propiedad Pdf_Viewed  y First_Video.PdfCompleted estan en false entonces tiramos error.
    throw new Error("Debe ver el pdf para acceder al primer videoooo");
  }
  //si lo anterior no se cumple simplemente es xq ya se puede acceder al primer video.
};

const allowOtherVideos=(Progress,select)=>{
   
    const properties=getObjectAtributtes(Progress.dataValues);//obtenemos los atributos del modelo en general

    const prevProgress=properties[properties.indexOf(select)-1];//nos quedamos con la propiedad/progreso anterior


    if (!Progress[prevProgress].Ready_to_Next_Video || !Progress[select].Last_Video_Completed  ) {
        throw new Error(`Debe ver ${prevProgress},un minimo de 2 veces, para desbloquear ${select}`);
      }
}
module.exports = {
    allowFirstVideo,
    allowOtherVideos,
    completePdf,
    completeVideo
};
