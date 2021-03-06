
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1},
        {recipe_id: 1, ingredient_id: 2},
        {recipe_id: 1, ingredient_id: 3},
        {recipe_id: 1, ingredient_id: 4},
        {recipe_id: 2, ingredient_id: 1},
        {recipe_id: 2, ingredient_id: 2},
        {recipe_id: 2, ingredient_id: 4},
        {recipe_id: 2, ingredient_id: 5}
      ]);
    });
};
