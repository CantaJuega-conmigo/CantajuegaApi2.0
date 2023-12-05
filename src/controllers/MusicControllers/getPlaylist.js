const { MusicPlaylist, Music } = require("../../DB");
module.exports = async (id) => {
  try {
    const result = await MusicPlaylist.findAll({
      include: { model: Music, attributes: ["name","url","id"] },
    });
    if (!result) {
      throw new Error("Playlist not found");
    }
    return result;
  } catch (error) {
    throw error;
  }
};
