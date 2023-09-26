const { Progress } = require('../../DB');
module.exports = async (id) => {
  try {
    const HandlersResult = id
      ? await Progress.findByPk(id, { include: 'Child' })
      : await Progress.findAll({ include: 'Child' });
    return HandlersResult;
  } catch (error) {
    throw new Error(`Error en el servidor 'getProgress': ${error.message}`);
  }
};
