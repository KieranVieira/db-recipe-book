
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().unique();

        tbl.string('instructions').notNullable();

        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
