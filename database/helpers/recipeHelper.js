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

const getRecipes = () => {
    return db
        .from('recipes')
        .select('dishes.name as DishName', 'recipes.name as RecipeName', 'recipes.dish_id', 'recipes.id as RecipeId')
        .join('dishes', {'recipes.dish_id': 'dishes.id'})
}

const addRecipe = recipe => {
    return db('recipes')
        .insert(recipe)
}

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}