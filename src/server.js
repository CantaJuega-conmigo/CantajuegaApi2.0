const express = require("express");
const server = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
require("./DB");
const passport = require("./auth/google-auth");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 200, // 200 solicitudes por hora maximo para evitar ataques de fuerza bruta
});

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


server.use("/api", limiter,require("./routes"));


const { check, validationResult ,param} = require("express-validator");

server.get(
  "/prueba1/:id", [param('id').isEmail()],
  (req, res) => {
    const {id}=req.param
    let errors;
    try {
      const errores = validationResult(req);
      const hayerrores = !errores.isEmpty();
      if (hayerrores) {
        errors = errores;
        throw new Error("Errores");
      }
      res.send("hola");
    } catch (error) {
      res.status(400).send(errors);
    }
  }
);

server.use("*", (req, res) => {
  ///se podria crear un handler tambien
  res.status(404).send("page not found bro");
});
module.exports = server;
