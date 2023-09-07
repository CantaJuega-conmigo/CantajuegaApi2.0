const {getObjectAtributtes}=require('../../utils')
module.exports=(Progress, select) => {
    const properties = getObjectAtributtes(Progress.dataValues); //obtenemos los atributos del modelo en general
  
    const prevProgress = properties[properties.indexOf(select) - 1]; //nos quedamos con la propiedad/progreso anterior
  
    if (
      !Progress[prevProgress].Ready_to_Next_Video ||
      !Progress[select].Last_Video_Completed
    ) {
      throw new Error(
        `${prevProgress} debe tener un minimo de 2 vistas, para poder actualizar desbloquear ${select}`
      );
    }
  };