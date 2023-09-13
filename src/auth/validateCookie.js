const { validateToken } = require(".");

module.exports=(req)=>{
    const tokenfromcookie=req.cookies.accesscookie;
    console.log(tokenfromcookie)
    const istokenvalide=validateToken(tokenfromcookie);
    console.log(istokenvalide)
}