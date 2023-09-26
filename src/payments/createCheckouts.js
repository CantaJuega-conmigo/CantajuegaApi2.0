const axios = require("../axios/axios");

module.exports = async ( user_id,price_id) => {
  try {
    const data = {
      items: [{ price_id:price_id}],
      user_id:user_id ,
    };
    const resquest = await axios.post("/checkouts", data);
    return resquest.data;
  } catch (error) {
    throw error;
  }
};
