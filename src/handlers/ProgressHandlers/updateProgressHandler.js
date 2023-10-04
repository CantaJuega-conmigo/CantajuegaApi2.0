const {
  updateProgressVideos,
  updateProgress,
} = require('../../controllers/ProgressControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { select } = req.query;
  const { id } = req.params;
  const data = req.body;
  try {
    const update = select
      ? await updateProgressVideos(id, data, select)
      : await updateProgress(id, data);
    // res.status(201).send(update);
    response(res, 200, { message: update });
  } catch (error) {
    // res.status(401).send(error.message);
    ErrorResponse(res, 401, error);
  }
};
