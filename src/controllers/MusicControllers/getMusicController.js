const { Music } = require("../../DB");
module.exports = async () => {
  try {
    const result = await Music.findAll();
    if (!result) {
      throw new Error("Music not found");
    }
    return result;
  } catch (error) {
    throw error;
  }
};
