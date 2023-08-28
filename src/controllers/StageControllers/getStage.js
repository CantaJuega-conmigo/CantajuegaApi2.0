const { Stage } = require("../../DB");

module.exports = async () => {
  const allStage = await Stage.findAll();
  return allStage;
};
