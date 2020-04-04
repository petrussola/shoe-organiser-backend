/* eslint-disable func-names */
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('boxes')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('boxes').insert([
                { id: 1, box_number: 1, userId: 1 },
                { id: 2, box_number: 2, userId: 2 },
            ]);
        });
};
