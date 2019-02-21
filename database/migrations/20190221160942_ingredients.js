
exports.up = function(knex, Promise) {
    knex.schema.createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();

        tbl.string('ammount', 255).notNullable().unique();
    })
};

exports.down = function(knex, Promise) {
  
};
