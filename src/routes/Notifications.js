const { Router } = require("express");
///middlewares
const { validateauth, validateAdmin } = require("../middlewares");

const { getNotificationsHandler,deleteNotificationHandler } = require("../handlers/NotificationHandlers");

const router = Router();

router.get("/", validateauth, validateAdmin ,getNotificationsHandler);
router.get("/:id",  getNotificationsHandler);
router.delete('/:id',deleteNotificationHandler)
module.exports = router;
