const { editReport } = require('../../controllers/ReportControllers');
const { verifyIsAdmin } = require('../../helpers/AuthHelpers');
const { response: send, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { Response, Description } = req.body;
    const { id } = req.params;
    if (!id) throw new Error('Resquest failed.');
    /// si vienen ambos campos tiramos error para ahorrar recursos al intentar editar
    if (Response && Description) throw new Error('Resquest failed.');
    ////admin solo puede responder

    // const isAdmin = verifyIsAdmin(req);

    // if (Response && isAdmin) {
      const reportEditStatus = await editReport({ Response }, id);
      // return res.status(200).send({
      //   error: false,
      //   message: 'La respuesta fue enviada con exito.',
      // });
      return send(res, 200, { message: 'La respuesta fué enviada con éxito' });
    // }
    ///usuario puede editar el detalle de su reporte
    if (Description && !isAdmin) {
      const reportEditStatus = await editReport({ Description }, id);
      // return res.status(200).send({
      //   error: false,
      //   message: 'El reporte fue editado con exito.',
      // });
      return send(res, 200, { message: 'El reporte fué editado con éxito' });
    }
    throw new Error('Resquest failed.');
  } catch (error) {
    // res.status(400).send({
    //   error: true,
    //   message: error.message ?? 'server failed',
    // });
    ErrorResponse(res, 400, error);
  }
};
