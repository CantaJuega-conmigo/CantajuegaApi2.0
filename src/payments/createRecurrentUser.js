const axios = require("../axios/axios");

module.exports = async (email, fullName) => {
  try {
    const newUser = { email: email, full_name: fullName };
    console.log(newUser);
    const resquest = await axios.post("/users", newUser);
    return resquest.data
  } catch (error) {
    throw error;
  }
};
