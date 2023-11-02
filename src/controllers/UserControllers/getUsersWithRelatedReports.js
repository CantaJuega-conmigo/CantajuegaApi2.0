const { User, Report } = require('../../DB');

module.exports = async () => {
  try {
    const onlyUsersWithReports = await User.findAll({
      include: { model: Report, required: true },
    });
    //con required en true me aseguro de traer solo a los usuarios que tienen reportes
    return onlyUsersWithReports;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'getUsersWithRelatedReports': ${error.message}`
    );
  }
};
