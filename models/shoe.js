// HELPERS
const db = require('../config/db-config');

function getAllShoesByUserId(userId) {
    return db('shoes').where(userId);
}

function getShoeById(id, userId) {
    return db('shoes').where(id, userId);
}

module.exports = {
    getAllShoesByUserId,
    getShoeById,
};
