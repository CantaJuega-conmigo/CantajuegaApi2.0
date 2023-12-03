const { createMusic } = require("../../controllers/MusicControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { name, url, MusicPlaylistId } = req.body;
  try {
    const newMusic = await createMusic({ name, url, MusicPlaylistId });
    response(res, 201, { data: newMusic });
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
 