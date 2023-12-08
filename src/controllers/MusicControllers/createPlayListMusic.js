const { MusicPlaylist } = require("../../DB");
module.exports = async (data) => {
  try {
    console.log(data);
    const newMusicPlaylist = await MusicPlaylist.create( data );
    return newMusicPlaylist;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'createMusicPlaylist': ${error.message}`
    );
  }
};
