// HELPERS
const db = require('../config/db-config');

function getAllBoxes(userId) {
    return db('boxes').where(userId);
}

function getBoxById(boxNumber) {
    return db('boxes')
        .where({ box_number: boxNumber })
        .first();
}

async function createBox(boxNumber, userId) {
    return db('boxes')
        .insert({ box_number: boxNumber, userId }, 'box_number')
        .then(ids => {
            return getBoxById(ids[0]);
        });
}

function deleteBox(boxNumber) {
    return db('boxes')
        .where({ box_number: boxNumber })
        .del();
}

function editBox(boxNumber, newBoxNumber) {
    return db('boxes')
        .where({ box_number: boxNumber })
        .update({ box_number: newBoxNumber }, 'box_number')
        .then(ids => {
            return getBoxById(ids[0]);
        })
        .catch(error => {
            throw new Error(error);
        });
}

module.exports = {
    getAllBoxes,
    createBox,
    deleteBox,
    getBoxById,
    editBox,
};
