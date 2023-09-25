const { check ,param} = require("express-validator");
const passwordValidator = require("./passwordValidator");
module.exports=[
    param('id').isUUID('all').withMessage('Incorrect type of param.'),
    passwordValidator,
    check('firstName').isString().escape()
]