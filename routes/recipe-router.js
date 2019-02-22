const express = require('express');

const db = require('../database/helpers/recipeHelper');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('recipies')
});

module.exports = router;