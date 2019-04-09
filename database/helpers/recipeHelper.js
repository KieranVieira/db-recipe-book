const db = require('../dbConfig');

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
    getRecipes,
    addRecipe
}