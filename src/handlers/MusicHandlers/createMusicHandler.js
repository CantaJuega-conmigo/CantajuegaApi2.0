const { uploader } = require("../../Services/Cloudinary");
const { createMusic } = require("../../controllers/MusicControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  const { name, url, MusicPlaylistId } = req.body;
  const data = {
    name,
    MusicPlaylistId,
  };
  try {

    const cloudinaryUpload = () => {
      return new Promise((resolve, reject) => {
        uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error) {
              console.error(error);
              reject("Error al subir archivo a Cloudinary");
            }
            resolve(result.secure_url);
          })
          .end(req.file.buffer);
      });
    };
    // Esperar la carga a Cloudinary antes de continuar
    const cloudinaryUrl = await cloudinaryUpload();

    // Crear la música con la URL de Cloudinary
    const newMusic = await createMusic({
      name,
      url: cloudinaryUrl,
      MusicPlaylistId:"b9ccf049-5eae-43ab-b578-c298329cdbce"
    });
    // Responder al cliente
    response(res, 201, {
      message: "La canción fue creada y guardada con éxito",
      data: newMusic,
    });
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
