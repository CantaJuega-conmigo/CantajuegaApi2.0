const { Report } = require("../../DB");
module.exports = async (Response,id) => {
  try {
    console.log(Response);
    const reportedited = await Report.update(Response, { where: { id: id } });
    if (!reportedited[0]) throw new Error("Resquest failed.");
    return reportedited;
  } catch (error) {
    throw error
  }
};
