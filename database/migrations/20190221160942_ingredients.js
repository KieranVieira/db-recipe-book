
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();

        tbl.string('amount', 255).notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
