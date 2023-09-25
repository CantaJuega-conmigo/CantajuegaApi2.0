const { User } = require("../../DB");
module.exports = async (email, Otp_Code_Email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) throw new Error("User not found.");
    const correctcode = user.Otp_Code_Email === Otp_Code_Email;
    if (!correctcode) throw new Error("El codigo ingresado no es correcto.");
    const updatedUser = await User.update(
      { email_verified: true, Otp_Code_Email: null },
      { where: { email: email } }
    );
    const isSuccesfully = updatedUser[0] === 1;
    return isSuccesfully;
  } catch (error) {
    throw error;
  }
};
