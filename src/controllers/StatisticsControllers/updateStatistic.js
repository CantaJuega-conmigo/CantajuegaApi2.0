const { Statistic } = require('../../DB');

module.exports = async (string) => {
  try {
    const getStatistics = await Statistic.findOne();
    if (string === 'addUser' && getStatistics) {
      getStatistics.Total_Users += 1;
      await getStatistics.save();
      return 'Total_Users + 1';
    }
    if (string === 'deleteUser' && getStatistics) {
      getStatistics.Total_Users -= 1;
      await getStatistics.save();
      return 'Total_Users - 1';
    }
    if (string === 'addStage' && getStatistics) {
      getStatistics.Total_Stages += 1;
      await getStatistics.save();
      return 'Total_Stages - 1';
    }
    if (string === 'deleteStage' && getStatistics) {
      getStatistics.Total_Stages -= 1;
      await getStatistics.save();
      return 'Total_Stages - 1';
    }
    if (string === 'addMembership' && getStatistics) {
      getStatistics.Total_Memberships += 1;
      await getStatistics.save();
      return 'Total_Memberships + 1';
    }
    if (string === 'deleteMembership' && getStatistics) {
      getStatistics.Total_Memberships -= 1;
      await getStatistics.save();
      return 'Total_Memberships - 1';
    }
    if (string === 'addReport' && getStatistics) {
      getStatistics.Total_Reports += 1;
      await getStatistics.save();
      return 'Total_Reports + 1';
    }
    if (string === 'deleteReport' && getStatistics) {
      getStatistics.Total_Reports -= 1;
      await getStatistics.save();
      return 'Total_Reports - 1';
    }
    if (string === 'addChild' && getStatistics) {
      getStatistics.Total_Childs += 1;
      await getStatistics.save();
      return 'Total_Childs + 1';
    }
    if (string === 'deleteChild' && getStatistics) {
      getStatistics.Total_Childs -= 1;
      await getStatistics.save();
      return 'Total_Childs - 1';
    }
  } catch (error) {
    throw new Error(`Error en el servidor 'updateStatistic': ${error.message}`);
  }
};
