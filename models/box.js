const db = require('../config/db-config');

function getAllBoxes() {
    return db('boxes');
}

module.exports = {
    getAllBoxes,
};
