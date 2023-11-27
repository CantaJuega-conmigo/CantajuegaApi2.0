const express = require('express');
const server = express();
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
require('./DB');
const passport = require('./auth/google-auth');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 200, // 200 solicitudes por hora maximo para evitar ataques de fuerza bruta
});

server.use(
  cors({
    origin: ['http://localhost:3000', 'https://cantajuega2-0.vercel.app','https://www.joadev.com.ar',''],
    methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    
  })
);
server.use(cookieParser());
server.use(
  session({ secret: 'secreto', resave: true, saveUninitialized: true ,cookie:{domain:'.joadev.com.ar'}})
);

server.use(passport.initialize());
server.use(passport.session());

server.use(express.urlencoded({ extended: false }));
server.use(morgan('dev'));
server.use(express.json({ limit: '100kb' }));

server.use('/api', limiter, require('./routes'));

//-------------------------------------------------------------



//-------------------------------------------------------------

server.use('*', (req, res) => {
  ///se podria crear un handler tambien
  res.status(404).send('page not found bro');
});
module.exports = server;
