const { User } = require("../../DB");
const { hashpassword, sendEmailLogin } = require("../../utils");
const { createToken } = require("../../auth");
const { generateOtpCode } = require("../../helpers/AuthHelpers");
const { updateStatistic } = require("../../controllers/StatisticsControllers");
const { UniqueConstraintError } = require('sequelize');
module.exports = async ({
  id,
  firstName,
  lastName,
  email,
  password,
  MembershipId,
}) => {
  try {
    const is_Admin = ["joakig6@gmail.com", "stallingkatt@gmail.com"].includes(
      email.toLowerCase()
    );
    const hashedPassword = password ? await hashpassword(password) : null;
    const Otp_Code_Email = await generateOtpCode();
    const UserCreated = await User.create({
      id,
      firstName,
      lastName,
      password: hashedPassword,
      email: email.toLowerCase(),
      is_Admin,
      MembershipId,
      Otp_Code_Email,
    });
    await updateStatistic("addUser");
    // const UserAuth=createToken(UserCreated,'1d')
    // await sendEmailLogin(firstName, email);
    // await sendEmailLogin(firstName,email,Otp_Code_Email)
    return UserCreated
  } catch (error) {
    if (error instanceof UniqueConstraintError) {    
      throw new Error("Este correo ya se encuentra en uso, por favor utilice otro.")
    } else {
      throw new Error(`Error en el servidor 'createUser': ${error.message}`);
    }
  }
};
