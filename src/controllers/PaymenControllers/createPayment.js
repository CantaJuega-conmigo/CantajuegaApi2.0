const { Payment } = require("../../DB");
module.exports = async ({ recurrente_Id, checkout_url }) => {
  try {
    const payment = await Payment.create({ recurrente_Id, checkout_url });
    if (!payment) throw new Error("Error al generar el checkout de pago.");
    console.log(payment);
    return true;
  } catch (error) {
    throw error;
  }
};
