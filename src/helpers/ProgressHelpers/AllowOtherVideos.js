const {getObjectAtributtes}=require('../../utils')
module.exports=(Progress, select) => {///se usa en controller
    const properties = getObjectAtributtes(Progress.dataValues); //obtenemos los atributos del modelo en general
  
    const prevProgress = properties[properties.indexOf(select) - 1]; //nos quedamos con la propiedad/progreso anterior
    console.log('se ejecutar')
    if (
      !Progress[prevProgress].Ready_to_Next_Video ||//video anterior
      !Progress[select].Last_Video_Completed//actual video
    ) {
      throw new Error(
        `${prevProgress} debe tener un minimo de 2 vistas, para poder actualizar desbloquear ${select}`
      );
    }
  };