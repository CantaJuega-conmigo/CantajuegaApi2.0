const { Progress } = require("../../DB");
module.exports = async (id) => {
  const HandlersResult = id
    ? await Progress.findByPk(id)
    : await Progress.findAll();
  return HandlersResult
};