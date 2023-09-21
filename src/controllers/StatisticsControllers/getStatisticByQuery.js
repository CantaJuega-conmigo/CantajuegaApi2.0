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
      `Error in the server 'getStatisticByQuery': ${error.message}. The query must be exact to one of the properties of the Statistics model`
    );
  }
};
