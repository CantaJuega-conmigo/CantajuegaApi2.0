const { Child, User, Stage, Progress } = require('../../DB');

module.exports = async () => {
  try {
    const allChild = await Child.findAll({
      include: [User, Stage, Progress],
    });
    return allChild;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el servidor 'getChild': ${error.message}`);
  }
};
