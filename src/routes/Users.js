const { Router } = require('express');
const router = Router();
///handlers
const {
  deleteUserHandler,
  getUsersHandler,
  registerUserHandler,
  logicalDeletionUserHandler,
  authUserHandler,
  changeUserPasswordHandler,
  recoverUserPasswordHandler,
  updateUserHandler,
  verifyEmailUserHandler,
  getUsersWithRelatedReports,
} = require('../handlers/UserHandlers');

const { loginHandler } = require('../handlers/LoginHandler');
///middlewares
const {
  validateRegister,
  validateLogin,
  validateauth,
  validateAdmin,
  validateChangePassword,
  validateUpdateUser,
} = require('../middlewares');

///validators

const {
  loginValidators,
  registerValidators,
  changePasswordValidators,
  recoverPasswordValidators,
  editUserValidators,
  createChildValidator
} = require('../validators');
const { logoutHandler } = require('../handlers/LogOutHandler');

///routes
router.get('/reports', getUsersWithRelatedReports);
router.get('/verify', verifyEmailUserHandler);
router.get('/password', recoverUserPasswordHandler);
router.put(
  '/password/recover',
  recoverPasswordValidators,
  validateChangePassword,
  changeUserPasswordHandler
);
router.put(
  '/password',
  changePasswordValidators,
  validateChangePassword,
  changeUserPasswordHandler
);
router.get('/auth', validateauth, authUserHandler);
router.post('/logout', validateauth, logoutHandler);
router.get('/:id', getUsersHandler);
router.get('/', getUsersHandler);
router.put(
  '/edit/:id',
  editUserValidators,
  validateUpdateUser,
  updateUserHandler
);
router.post('/login', loginValidators, validateLogin, loginHandler);
router.post(
  '/register',
  [...registerValidators,...createChildValidator],
  validateRegister,
  registerUserHandler
);

router.delete('/:id', validateauth, validateAdmin, deleteUserHandler);

router.patch('/:id', logicalDeletionUserHandler);

module.exports = router;
