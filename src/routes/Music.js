const { Router } = require("express");
const {
  getPlaylistHandler,
  createPlaylistHandler,
  getMusics,
  createMusicHandler,
} = require("../handlers/MusicHandlers");
const router = Router();

router.get("/playlist", getPlaylistHandler);
router.post("/playlist", createPlaylistHandler);
router.get("/", getMusics);
router.post("/", createMusicHandler);

module.exports = router;
