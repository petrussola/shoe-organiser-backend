// HELPERS
const db = require('../config/db-config');

function getUserBy(email) {
    return db('users')
        .where({ email })
        .first();
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}

function createUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            return getUserById(ids[0]);
        });
}

module.exports = {
    createUser,
    getUserById,
    getUserBy,
};
