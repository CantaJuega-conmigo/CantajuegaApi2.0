const { getStage, getStageById } = require('../../controllers/StageControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { childs } = req.query;
  const {id}=req.params
  const getChilds = childs === 'yes';
  try {
    const result =!id? await getStage(getChilds):await getStageById(id,childs)
    // res.status(200).send(result);
    response(res, 200, { data: result });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: 'Error in the server' });
    ErrorResponse(res, 500, error);
  }
};
