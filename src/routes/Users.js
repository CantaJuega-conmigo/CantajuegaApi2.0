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
} = require("../handlers/UserHandlers");

const { loginHandler } = require("../handlers/LoginHandler");
///middlewares
const {
  validateRegister,
  validateLogin,
  validateauth,
  validateAdmin,
} = require("../middlewares");

///validators

const { loginValidators, registerValidators } = require("../validators");

///routes
router.get("/auth", validateauth,authUserHandler);
router.get("/:id", getUsersHandler);
router.get("/", getUsersHandler);
router.post("/login", loginValidators, validateLogin, loginHandler);

router.post(
  "/register",
  registerValidators,
  validateRegister,
  registerUserHandler
);

router.delete("/:id", validateauth, validateAdmin,deleteUserHandler);

router.patch("/:id", logicalDeletionUserHandler);

router.put("/:id", validateauth, validateAdmin, editUserHandler);
module.exports = router;
