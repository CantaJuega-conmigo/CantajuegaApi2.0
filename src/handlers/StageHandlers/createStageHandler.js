const { createStage } = require('../../controllers/StageControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { name, description, minAge, maxAge } = req.body;

  try {
    // const stage = await createStage(name, description, minAge, maxAge);
    const stage = await createStage(req.body);

    // return res.status(201).json(stage);
    response(res, 201, { message:'The new stage was created succesfully!', data: stage });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: 'Error in the server' });
    ErrorResponse(res, 500, error);
  }
};
