/* eslint-disable func-names */
exports.up = function(knex) {
    return knex.schema.alterTable('boxes', table => {
        table
            .integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('boxes', table => {
        table.dropColumn('userId');
    });
};
