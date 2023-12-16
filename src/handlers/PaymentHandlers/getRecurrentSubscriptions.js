const { getSubscriptions } = require("../../payments");
const getProducts = require("../../payments/getProducts");
const { response, ErrorResponse } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const products = !id ? await getSubscriptions() : await getSubscriptions(id);
    if (!id && !products.length)
      throw new Error("No se encontraron resultados");
    if (id && !products) throw new Error("No se encontro el producto");
    return response(res, 200, { data: products });
  } catch (error) {
    return ErrorResponse(res, 400, error);
  }
};
