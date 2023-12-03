const { createPlaylistMusic } = require("../../controllers/MusicControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { name } = req.body;
  try {
      if(!name) throw new Error('name is required');
    const newPlaylist = await createPlaylistMusic({name});
    return response(res, 200, { data: newPlaylist });
  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
};
