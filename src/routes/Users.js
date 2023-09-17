const { Router } = require("express");
const router = Router();
///handlers
const {
  deleteUserHandler,
  getUsersHandler,
  registerUserHandler,
  editUserHandler,
  logicalDeletionUserHandler,
  authUserHandler,
  changeUserPasswordHandler,
} = require("../handlers/UserHandlers");

const { loginHandler } = require("../handlers/LoginHandler");
///middlewares
const {
  validateRegister,
  validateLogin,
  validateauth,
  validateAdmin,
  validateChangePassword,
} = require("../middlewares");

///validators

const { loginValidators, registerValidators,changePasswordValidators } = require("../validators");
const { logoutHandler } = require("../handlers/LogOutHandler");

///routes
router.put("/password", changePasswordValidators,validateChangePassword,changeUserPasswordHandler);
router.get("/auth", validateauth, authUserHandler);
router.get("/logout", logoutHandler);
router.get("/:id", getUsersHandler);
router.get("/", getUsersHandler);
router.post("/login", loginValidators, validateLogin, loginHandler);
router.post(
  "/register",
  registerValidators,
  validateRegister,
  registerUserHandler
);

router.delete("/:id", validateauth, validateAdmin, deleteUserHandler);

router.patch("/:id", logicalDeletionUserHandler);

router.put("/:id", validateauth, validateAdmin, editUserHandler);
module.exports = router;
