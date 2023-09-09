const { Report } = require("../../DB");
module.exports =async (id) => {
  try {
    const report =await Report.findByPk(id,{include: 'Notification'});
    if (!report) {
      throw new Error("Report not found.");
    }
    return report
  } catch (error) {
    throw error;
  }
};
