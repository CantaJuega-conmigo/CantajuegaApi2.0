const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Cantajuega");
});
router.use("/", require("./publics"));

router.use("/", require("./privates"));

router.use("*", (req, res) => {
  res.status(404).send("page not found bro");
});

module.exports = router;
