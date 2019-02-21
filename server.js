const express = require('express');
const helmet = require('helmet');
const db = require('./database/helpers/recipeHelper');

const server = express()

server.use(express.json());
server.use(helmet())

db.addDish({name: 'Cake'}).then(dishId => console.log(dishId)).catch(error => console.log(error))

module.exports = server;