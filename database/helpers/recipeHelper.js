const db = require('../dbConfig');

const getDishes = () => {
    return db('dishes')
}

const addDish = dish => {
    return db('dishes')
        .insert(dish)
}

module.exports = {
    getDishes,
    addDish
}