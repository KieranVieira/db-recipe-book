
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Hawaiian Pizza', instructions:"Do something put toppings here", dish_id: 1},
        {name: 'Meatlovers Pizza', instructions:"Do something put bacon somewhere", dish_id: 1},
        {name: 'Ol Del Paso', instructions:"Read the packaging", dish_id: 2},
        {name: 'Carne Assada', instructions:"Wait for ages for it to slow cook", dish_id: 2}
      ]);
    });
};
