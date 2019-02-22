
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Flour', amount:1, measurement:'cup'},
        {name: 'Pepperoni', amount:0.5, measurement:'cup'},
        {name: 'Pineapple', amount:0.5, measurement:'cup'},
        {name: 'Bacon', amount:0.5, measurement:'cup'},
        {name: 'Sausage', amount:0.5, measurement:'cup'},
      ]);
    });
};
