const express = require("express");
const server = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const {FRONT_DOMAIN} = process.env;
require("./DB");
server.use(
  cors({
    origin: ["http://localhost:3000", "https://cantajuega2-0.vercel.app"],
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE","PATCH"],
    credentials:true
  })
);
server.use(cookieParser())
server.get('/api/cookie',async(req,res)=>{
  res.cookie("hola",'valor')
  res.cookie("hola0",'valor',{
    maxAge:1000000,
  })
  res.cookie("hola1",'valor',{
    maxAge:1000000,
    sameSite:'lax',
    domain:FRONT_DOMAIN
  })
  res.cookie("hola2",'valor',{
    maxAge:1000000,
    sameSite:'lax',
    secure:true,
    domain:FRONT_DOMAIN
  })
  res.cookie("hola3",'valor',{
    maxAge:1000000,
    sameSite:'lax',
    secure:false,
    domain:FRONT_DOMAIN
  })
  res.cookie("hola4",'valor',{
    maxAge:1000000,
    sameSite:'lax',
    secure:true,
    httpOnly:true
  })
  res.cookie("hola5",'valor',{
    maxAge:1000000,
    sameSite:'lax',
    secure:true,
    httpOnly:false,
    domain:FRONT_DOMAIN
  })
  res.cookie("hola6",'valor',{
    maxAge:1000000,
    sameSite:'lax',
    secure:false,
    httpOnly:true
  })
  res.cookie("hola7",'valor',{
    maxAge:1000000,
    sameSite:'strict'
  })
  res.cookie("hola8",'valor',{
    maxAge:1000000,
    sameSite:'strict',
    secure:true
  })
  res.cookie("hola9",'valor',{
    maxAge:1000000,
    sameSite:'strict',
    secure:false
  })
  res.cookie("hola10",'valor',{
    maxAge:1000000,
    sameSite:'strict',
    secure:true,
    httpOnly:true
  })
  res.cookie("hola11",'valor',{
    maxAge:1000000,
    sameSite:'strict',
    secure:true,
    httpOnly:false,
    domain:FRONT_DOMAIN
  })
  res.cookie("hola12",'valor',{
    maxAge:1000000,
    sameSite:'strict',
    secure:false,
    httpOnly:true,
    domain:FRONT_DOMAIN
  })
  res.cookie("holcdccda7",'valor',{
    maxAge:1000000,
    sameSite:'none'
  })
  res.cookie("hola8cddc",'valor',{
    maxAge:1000000,
    sameSite:'none',
    secure:true
  })
  res.cookie("hola9cddc",'valor',{
    maxAge:1000000,
    sameSite:'none',
    secure:false
  })
  res.cookie("hocddcla10",'valor',{
    maxAge:1000000,
    sameSite:'none',
    secure:true,
    httpOnly:true
  })
  res.cookie("cd",'valor',{
    maxAge:1000000,
    sameSite:'none',
    secure:true,
    httpOnly:false,
    domain:FRONT_DOMAIN
  })
  res.cookie("cddcd",'valor',{
    maxAge:1000000,
    sameSite:'none',
    secure:false,
    httpOnly:true,
    domain:FRONT_DOMAIN
  })
 
 

  res.send('cookie')
})
// server.get('/vercookie',(req,res)=>{
//   console.log(req.cookies.accesscookie);
//   res.send('ver coookie')
// })
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api", require("./routes"));
server.use("*", (req, res) => {
  ///se podria crear un handler tambien
  res.status(404).send("page not found bro");
});
module.exports = server;
