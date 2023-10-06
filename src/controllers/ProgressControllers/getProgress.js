const { Progress } = require('../../DB');
module.exports = async (id) => {
  try {
    const HandlersResult = id
      ? await Progress.findByPk(id, { include: 'Child' })
      : await Progress.findAll({ include: 'Child' });
      if(id&&!HandlersResult) throw new Error('Progress not found')
      if(!id&&!HandlersResult.length) throw new Error('No progresses yet.')
    return HandlersResult;
  } catch (error) {
    throw new Error(`Error en el servidor 'getProgress': ${error.message}`);
  }
};
