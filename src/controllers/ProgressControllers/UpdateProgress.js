const { Progress } = require("../../DB");
const getObjectAtributtes = require("../../utils/getObjectAtributtes");
const { completePdf } = require("../../utils/progressControls");
const { getUsers } = require("../UserControllers");

module.exports = async (id, newData) => {
  try {
    const progress = await Progress.findByPk(id);
    if (!progress) {
      throw new Error("Error in server.");
    };
    const isChildExists = await getUsers(progress.ChildId);
    if (!isChildExists) {
      //si no existe el child tiramos error
      throw new Error("Child not exists.");
    }

    const Atributte=getObjectAtributtes(newData)[0];//actual atributo a modificar
    const Progressatributtes=getObjectAtributtes(progress.dataValues);//atributos del modelo en general
    const correctIndex=Progressatributtes.indexOf(Atributte)//indice del actual atributo en el array 

    const UpdateResults = await Progress.update(newData, {
      where: {
        id: id,
      },
    });
    
    const updatedProgress=await Progress.findByPk(id)//progreso ya actualizado


    if(Atributte==="Pdf_Viewed"){
       const pdfCompleted=await completePdf(updatedProgress,Progress,id)
       return pdfCompleted
    }
  
    return 'Puede avanzar';
  } catch (error) {
    throw error;
  }
};
