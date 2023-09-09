const { Report } = require("../../DB");
module.exports = async (id) => {
  try {
    const reportdeleted = await Report.destroy({ where: { id: id } });
    if (!reportdeleted) {
      throw new Error("Resquest failed.");
    }
    return reportdeleted;
  } catch (error) {
    throw error;
  }
};
