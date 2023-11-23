const { Child, User, Stage, Progress } = require('../../DB');

module.exports = async () => {
  try {
    const allChild = await Child.findAll({
      include: [{model: User,attributes:['firstName']}, {model:Stage,attributes:['name']} ],
    });
    return allChild;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el servidor 'getChild': ${error.message}`);
  }
};
