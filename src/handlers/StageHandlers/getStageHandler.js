const { getStage } = require('../../controllers/StageControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { childs } = req.query;
  const getChilds = childs === 'yes';
  try {
    const stage = await getStage(getChilds);
    // res.status(200).send(stage);
    response(res, 200, { data: stage });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: 'Error in the server' });
    ErrorResponse(res, 500, error);
  }
};
