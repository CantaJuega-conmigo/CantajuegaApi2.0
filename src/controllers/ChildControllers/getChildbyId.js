const { Child, User, Stage } = require('../../DB');
module.exports = async (id) => {
  if (!id) throw new Error('Solicitud fallida');
  try {
    const child = await Child.findByPk(id, {
      include: [{model: User,attributes:['firstName']}, {model:Stage,attributes:['name']} ]
    });
    if (!child) throw new Error('No se encontro un niño con ese id');
    return child;
  } catch (error) {
    throw new Error(`Error en el servidor 'getChildById': ${error.message}`);
  }
};
