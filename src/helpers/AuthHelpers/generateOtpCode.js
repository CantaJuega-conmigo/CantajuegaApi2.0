const otpGenerator = require("otp-generator");
module.exports = async () => {
  const otpCode =  otpGenerator.generate(6, {
    digits: true,
    alphabets: true,
    specialChars: false,
    upperCaseAlphabets:true
  });
  return otpCode
};
