// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true

cloudinary.config({
  cloud_name: "cantajuegamusics",
  api_key: "838392469389272",
  api_secret: "hInStLPoBP5LBqsfw58NSlb8Y-Y",
});

// Log the configuration
console.log(cloudinary.config());

module.exports = cloudinary;
