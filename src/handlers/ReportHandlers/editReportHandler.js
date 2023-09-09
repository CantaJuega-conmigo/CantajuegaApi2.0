const { editReport } = require("../../controllers/ReportControllers");
const { verifyIsAdmin } = require("../../helpers/AuthHelpers");

module.exports = async (req, res) => {
  try {
    const { Response, Description } = req.body;
    const { id } = req.params;
    if (!id) throw new Error("Resquest failed.");
    /// si vienen ambos campos tiramos error para ahorrar recursos al intentar editar
    if (Response && Description) throw new Error("Resquest failed.");
    ////admin solo puede responder

    const isAdmin = verifyIsAdmin(req);

    if (Response && isAdmin) {
      const reportEditStatus = await editReport({Response}, id);
      return res.status(200).send({
        error:false,
        message:'La respuesta fue enviada con exito.'
      });
    }
    ///usuario puede editar el detalle de su reporte
    if (Description && !isAdmin) {
      const reportEditStatus = await editReport({Description}, id);
      return res.status(200).send({
        error:false,
        message:'El reporte fue editado con exito.'
      });
    }

    throw new Error("Resquest failed.");
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message ?? "server failed",
    });
  }
};
