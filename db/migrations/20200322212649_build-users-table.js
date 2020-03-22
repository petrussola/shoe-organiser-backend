/* eslint-disable func-names */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table
            .string('email', 128)
            .notNullable()
            .unique();
        table.string('password', 128).notNullable();
        table.string('name', 128).notNullable();
        table.string('last_name', 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
