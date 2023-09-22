const { Statistic } = require('../../DB');

module.exports = async (query) => {
  try {
    const searchQuery = await Statistic.findOne({
      attributes: [query],
      /* query debe ser un string solo con cualquiera de estos:
         Total_Users
         Total_Stages
         Total_Memberships
         Total_Childs
         Stages_Completed
         Stages_In_Progress
         Total_Reports
         Memberships_Actives
      */
    });
    return searchQuery;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'getStatisticByQuery': ${error.message}. La query debe ser exacta a alguna de las propiedades del modelo Statistics`
    );
  }
};
