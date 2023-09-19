const { Payment } = require("../../DB");

module.exports = async (data, id) => {
  try {
    const updated = await Payment.update(data, { where: { id: id } });

    if (!updated[0]) throw new Error("Error al actualizar el estado de pago");

    return true;
  } catch (error) {
    throw error
  }
};
