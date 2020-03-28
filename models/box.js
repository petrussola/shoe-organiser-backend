// HELPERS
const db = require('../config/db-config');

function getAllBoxes() {
    return db('boxes');
}

function getBoxById(boxNumber) {
    return db('boxes')
        .where({ box_number: boxNumber })
        .first();
}

async function createBox(boxNumber) {
    try {
        // We check if box with id passed by User exists
        const box = await getBoxById(boxNumber);
        // If it doesn't, we insert the new box and we return the new box
        if (!box) {
            return db('boxes')
                .insert({ box_number: boxNumber }, 'box_number')
                .then(ids => {
                    return getBoxById(ids[0]);
                })
                .catch(error => {
                    throw new Error(error);
                });
        }
        // If there is a box with the same number given by User, we throw an error with message
        throw new Error(`A box with id ${boxNumber} already exists`);
    } catch (error) {
        throw new Error(error);
    }
}

function deleteBox(boxNumber) {
    return db('boxes')
        .where({ box_number: boxNumber })
        .del();
}

module.exports = {
    getAllBoxes,
    createBox,
    deleteBox,
    getBoxById,
};
