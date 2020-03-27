/* eslint-disable func-names */
exports.up = function(knex) {
    return knex.schema.createTable('boxes', table => {
        table.increments('id');
        table.integer('box_number').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('boxes');
};
