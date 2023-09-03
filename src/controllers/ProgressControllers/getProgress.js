const { Progress } = require("../../DB");
module.exports = async (id) => {
  const HandlersResult = id
    ? await Progress.findByPk(id,{include:'Child'})
    : await Progress.findAll({include:'Child'});
  return HandlersResult
};