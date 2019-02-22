
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();

        tbl.integer('amount').notNullable()

        tbl.integer('measurement').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
