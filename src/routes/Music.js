const { Router } = require("express");

const {
  getPlaylistHandler,
  createPlaylistHandler,
  getMusics,
  createMusicHandler,
} = require("../handlers/MusicHandlers");
const upload = require("../Services/Multer");
const { validateUserMusicMembership } = require("../middlewares");
const router = Router();

router.get("/playlist",validateUserMusicMembership ,getPlaylistHandler);
router.post("/playlist", createPlaylistHandler);
router.get("/", getMusics);
router.post("/",upload.single("file"),createMusicHandler);

module.exports = router;
