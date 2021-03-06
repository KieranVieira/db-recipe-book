const express = require('express');
const helmet = require('helmet');
const dishRouter = require('./routes/dish-router');
const recipeRouter = require('./routes/recipe-router')

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipeRouter)


module.exports = server;