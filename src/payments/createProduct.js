const axios = require("../axios/axios");

module.exports = async (product) => {
  try {
    const resquest = await axios.post("/products", product);
    return resquest.data;
  } catch (error) {
    throw error;
  }
};


