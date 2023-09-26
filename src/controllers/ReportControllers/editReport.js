const { Report } = require('../../DB');
module.exports = async (Response, id) => {
  try {
    console.log(Response);
    const reportedited = await Report.update(Response, { where: { id: id } });
    if (!reportedited[0]) throw new Error('Fallo la petición');
    return reportedited;
  } catch (error) {
    throw new Error(`Error en el servidor 'editReport': ${error.message}`);
  }
};
