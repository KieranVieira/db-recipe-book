
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Flour', amount:'1 cup'},
        {name: 'Pepperoni', amount:'1/2 cup'},
        {name: 'Pineapple', amount:'1/2 cup'},
        {name: 'Bacon', amount:'1/2 cup'},
        {name: 'Sausage', amount:'1/2 cup'},
      ]);
    });
};
