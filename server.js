const express = require('express');
const helmet = require('helmet');
const dishRouter = require('./routes/dish-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/dishes', dishRouter);

module.exports = server;