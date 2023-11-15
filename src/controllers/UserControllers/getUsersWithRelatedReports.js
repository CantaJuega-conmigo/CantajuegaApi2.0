const { User, Report } = require('../../DB');

module.exports = async (id) => {
  try {
    const onlyUsersWithReports = await User.findAll({
      include: { model: Report, required: true },
    });

    const getUser = await User.findByPk(id, { include: { model: Report } });
    //con required en true me aseguro de traer solo a los usuarios que tienen reportes
    return id ? getUser : onlyUsersWithReports;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'getUsersWithRelatedReports': ${error.message}`
    );
  }
};
