const { createChild } = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  // const { firstName, lastName, gender, birthDate, age } = req.body;

  try {
    const child = await createChild(
      // firstName,
      // lastName,
      // gender,
      // birthDate,
      // age
      req.body
    );

    // return res.status(201).json(child);
    response(res, 201, { data: child });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: 'Error in the server' });
    ErrorResponse(res, 500, error);
  }
};
