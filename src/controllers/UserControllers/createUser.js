const { User } = require("../../DB");
const { hashpassword, sendEmailLogin } = require("../../utils");
module.exports = async ({
  id,
  firstName,
  lastName,
  email,
  password,
  MembershipId,
}) => {
  try {
    const is_Admin = ["joakig6@gmail.com"].includes(email.toLowerCase());
    const hashedPassword = await hashpassword(password);
    const create = await User.create({
      id,
      firstName,
      lastName,
      password: hashedPassword,
      email:email.toLowerCase(),
      is_Admin,
      MembershipId,
    });
    return create;
  } catch (error) {
    throw error;
  }

  // await sendEmailLogin(firstName, email);
};
