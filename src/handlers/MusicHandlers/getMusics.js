const { getMusicController } = require("../../controllers/MusicControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
    try {
        const musics = await getMusicController();
        response(res, 200, { data: musics });
    } catch (error) {
        ErrorResponse(res, 500, error);
    }
}