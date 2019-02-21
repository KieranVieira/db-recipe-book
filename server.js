const express = require('express');
const helmet = require('helmet');
const db = require('./database/helpers/recipeHelper');

const server = express()

server.use(express.json());
server.use(helmet())

module.exports = server;