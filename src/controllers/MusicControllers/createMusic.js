const { Music } = require("../../DB");
module.exports = async (data) => {
  try {
    if(!data.MusicPlaylistId) throw new Error("MusicPlaylistId is required");
    const newMusic = await Music.create(data);
    return newMusic;
  } catch (error) {
    throw new Error(`Error en el servidor 'createMusic': ${error.message}`);
  }
};
