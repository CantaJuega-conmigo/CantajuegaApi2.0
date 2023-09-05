const getObjectAtributtes = require("./getObjectAtributtes");

const allowFirstVideo = (Progress) => {
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
    allowOtherVideos
};
