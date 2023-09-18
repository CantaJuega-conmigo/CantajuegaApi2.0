const { User } = require("../../DB");
const { hashpassword, sendEmailLogin } = require("../../utils");
const {createToken}=require('../../auth')
module.exports = async ({
  id,
  firstName,
  lastName,
  email,
  password,
  MembershipId,
}) => {
  try {
    const is_Admin = ["joakig6@gmail.com","stallingkatt@gmail.com"].includes(email.toLowerCase());
    const hashedPassword =password? await hashpassword(password):null;
    const UserCreated = await User.create({
      id,
      firstName,
      lastName,
      password: hashedPassword,
      email: email.toLowerCase(),
      is_Admin,
      MembershipId,
    });
    // const UserAuth=createToken(UserCreated,'1d')
    return {
      user: UserCreated
    }
  } catch (error) {
    throw error;
  }

  // await sendEmailLogin(firstName, email);
};
