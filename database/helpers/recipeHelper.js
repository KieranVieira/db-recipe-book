const db = require('../dbConfig');

const getDishes = () => {
    return db('dishes')
}

const addDish = dish => {
    return db('dishes')
        .insert(dish)
}

const getDish = id => {
    return db
        .from('dishes')
        .select('dishes.name as Dish', 'dishes.id as Dish_Id', 'recipes.name as RecipeName')
        .join('recipes', {'recipes.dish_id': 'dishes.id'})        
        .where({ 'dishes.id': id })
}

module.exports = {
    getDishes,
    addDish,
    getDish
}