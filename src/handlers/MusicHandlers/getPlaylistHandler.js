const getPlaylist = require("../../controllers/MusicControllers/getPlaylist");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const playlist = await getPlaylist(id);
    return response(res, 200, { data: playlist });
  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
};
