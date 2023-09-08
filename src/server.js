const express = require("express");
const server = express();
const cors = require("cors");

const morgan = require("morgan");

require("./DB");

server.use(
  cors({
    origin: ["http://localhost:3000", "https://cantajuega2-0.vercel.app/"],
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE","PATCH"],
  })
);
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api", require("./routes"));
server.use("*", (req, res) => {
  ///se podria crear un handler tambien
  res.status(404).send("page not found bro");
});
module.exports = server;
