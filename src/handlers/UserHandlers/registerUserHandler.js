const { createUser } = require('../../controllers/UserControllers');
const { UniqueConstraintError } = require('sequelize');
const { response, ErrorResponse } = require('../../utils');
module.exports = async (req, res) => {
  try {
    const info = await createUser(req.body);
    // res.status(201).send(info);
    response(res, 201, { data: info });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      // res
      //   .status(406)
      //   .send('Este correo ya se encuentra en uso, por favor utilice otro.');
      ErrorResponse(res, 406, {
        message: 'Este correo ya se encuentra en uso, por favor utilice otro.',
      });
    } else {
      // res.status(500).send('ERROR SERVER.');
      ErrorResponse(res, 500, error);
    }
  }
};
