const { Progress } = require('../../DB');
module.exports = async () => {
  try {
    const newProgress = await Progress.create({});
    return newProgress;
  } catch (error) {
    throw new Error(`Error en el servidor 'CreateProgress': ${error.message}`);
  }
};
