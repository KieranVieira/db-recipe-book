
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Hawaiian Pizza', dish_id: 1},
        {name: 'Meatlovers Pizza', dish_id: 1},
        {name: 'Ol Del Paso', dish_id: 2},
        {name: 'Carne Assada', dish_id: 2}
      ]);
    });
};
