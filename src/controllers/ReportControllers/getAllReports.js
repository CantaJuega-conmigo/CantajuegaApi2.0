const { Report } = require('../../DB');
module.exports = async () => {
  try {
    const allReports = await Report.findAll({
      include: 'User',
    });
    return allReports;
  } catch (error) {
    throw new Error(`Error en el servidor 'getAllReports': ${error.message}`);
  }
};

// model: Usuario,
// as: 'usuario', // Nombre de la relación en el modelo Reporte
// attributes: ['nombre', 'correo']
