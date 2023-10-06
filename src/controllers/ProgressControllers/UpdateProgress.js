const { Progress } = require('../../DB');
const { getObjectAtributtes } = require('../../utils');
const { getUsers } = require('../UserControllers');
const { CompletedPdf } = require('../../helpers/ProgressHelpers');
module.exports = async (id, newData) => {
  try {
    const progress = await Progress.findByPk(id);
    if (!progress) {
      throw new Error("Progress doesn't exist.");
    }
   
    const Atributte = getObjectAtributtes(newData)[0]; 

    const UpdateResults = await Progress.update(newData, {
      where: {
        id: id,
      },
    });

    const updatedProgress = await Progress.findByPk(id); //progreso ya actualizado

    if (Atributte === 'Pdf_Viewed') {
      const pdfCompleted = await CompletedPdf(updatedProgress, Progress, id);
      return pdfCompleted;
    }

    return 'Puede avanzar';
  } catch (error) {
    throw new Error(`Error en el servidor 'UpdateProgress': ${error.message}`);
  }
};
