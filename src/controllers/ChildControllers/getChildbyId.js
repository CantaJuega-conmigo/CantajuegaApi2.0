const { Child } = require('../../DB');
module.exports = async (id) => {
  if (!id) throw new Error('Solicitud fallida');
  try {
    const child = await Child.findByPk(id);
    if (!child) throw new Error('No se encontro un niño con ese id');
    return child;
  } catch (error) {
    throw new Error(`Error en el servidor 'getChildById': ${error.message}`);
  }
};
