const { User } = require('../../DB');
const { hashpassword, sendEmailLogin } = require('../../utils');
const { createToken } = require('../../auth');
const {generateOtpCode}=require('../../helpers/AuthHelpers')
const { updateStatistic } = require('../../controllers/StatisticsControllers');
module.exports = async ({
  id,
  firstName,
  lastName,
  email,
  password,
  MembershipId
}) => {
  try {
    const is_Admin = ["joakig6@gmail.com","stallingkatt@gmail.com"].includes(email.toLowerCase());
    const hashedPassword =password? await hashpassword(password):null;
    const Otp_Code_Email=await generateOtpCode()
    const UserCreated = await User.create({
      id,
      firstName,
      lastName,
      password: hashedPassword,
      email: email.toLowerCase(),
      is_Admin,
      MembershipId,
      Otp_Code_Email
    });
    await updateStatistic('addUser');
    // const UserAuth=createToken(UserCreated,'1d')
    return {
      user: UserCreated
    }
  } catch (error) {
    throw new Error(`Error en el servidor 'createUser': ${error.message}`);
  }

  // await sendEmailLogin(firstName, email);
};
