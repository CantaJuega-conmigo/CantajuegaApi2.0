const express = require("express");
const server = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
require("./DB");
const passport = require("./auth/google-auth");
server.use(
  cors({
    origin: ["http://localhost:3000", "https://cantajuega2-0.vercel.app"],
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
server.use(cookieParser());
server.use(
  session({ secret: "secreto", resave: true, saveUninitialized: true })
);

server.use(passport.initialize());
server.use(passport.session());


server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api", require("./routes"));
server.use("*", (req, res) => {
  ///se podria crear un handler tambien
  res.status(404).send("page not found bro");
});
module.exports = server;
