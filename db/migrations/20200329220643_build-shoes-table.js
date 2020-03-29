/* eslint-disable func-names */
exports.up = function(knex) {
    return knex.schema.createTable('shoes', table => {
        table.increments('id');
        table.string('photoUrl', 128).notNullable();
        table.string('style', 128).notNullable();
        table.string('season', 128).notNullable();
        table
            .integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('boxId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('boxes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shoes');
};
