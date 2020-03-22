/* eslint-disable func-names */
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                {
                    id: 1,
                    email: 'testuser1@test.com',
                    password: '1234',
                    name: 'testname1',
                    last_name: 'testlastname1',
                },
                {
                    id: 2,
                    email: 'testuser2@test.com',
                    password: '1234',
                    name: 'testname2',
                    last_name: 'testlastname2',
                },
            ]);
        });
};
