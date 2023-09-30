const { where } = require('sequelize');
const {
  User,
  Stage,
  Membership,
  Child,
  Report,
  Progress,
  Statistic,
} = require('../../DB');

module.exports = async () => {
  try {
    await Statistic.destroy({ where: {} });
    /*Primero borro toda la tabla Statistic "Si todo".
    Teniendo en cuenta que este endpoint es para recuperar los datos de las
    estadisticas en caso de que halla algún problema con el endpoint normal. Pencé
    en que lo mejor es limpiar toda la tabla para crear un nuevo Statistic 
    con los datos actualizados*/

    const [users, stages, memberships, childs, reports] = await Promise.all([
      User.findAll({ include: { model: Membership } }),
      Stage.findAll(),
      Membership.findAll(),
      Child.findAll({ include: { model: Progress } }),
      Report.findAll(),
    ]);

    //-----------------------------------------------------------------------
    let stagesCompleted = 0;
    childs.forEach((child) => {
      if (
        Array.isArray(child['Stages_Completed']) &&
        child['Stages_Completed'].length
      )
        stagesCompleted += child['Stages_Completed'].length;
    });
    /*Para calcular el total de stages completados, busco en el modelo Child
    la propiedad Stages_Completed y compruevo que sea un array y a su ves compruevo
    que ese array tenga al menos un elemento. Si tiene elementos calculo la longitud
    y le sumo al contador la longitud de cada child */
    //-----------------------------------------------------------------------
    let stagesInProgress = 0;
    childs.forEach((child) => {
      if (child.Progress) stagesInProgress += 1;
      //Si cada child tiene algo en la propiedad Progress, sumo +1 al contador
    });
    //-----------------------------------------------------------------------
    let membershipsActives = 0;
    users.forEach((user) => {
      if (user.Membership) membershipsActives += 1;
      //Si cada usuario tiene algo en la propiedad Membership, sumo +1 al contador
    });
    //-----------------------------------------------------------------------

    const newStatistic = {
      Total_Users: users.length,
      Total_Stages: stages.length,
      Total_Memberships: memberships.length,
      Total_Childs: childs.length,
      Stages_Completed: stagesCompleted,
      Stages_In_Progress: stagesInProgress,
      Total_Reports: reports.length,
      Memberships_Actives: membershipsActives,
    };

    const createNewEstatistic = await Statistic.create(newStatistic);
    return createNewEstatistic;
    /*En resumen: Primero borro todos los datos que puedan haber en la tabla Statistics,
    Luego recopilo el total de cada dato y por ultimo creo una nueva estadistica con los datos actualizados */
  } catch (error) {
    throw new Error(
      `Error en el servidor 'getForcedStatistic': ${error.message}`
    );
  }
};
