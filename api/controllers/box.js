// MODELS
const Box = require('../../models/box');

async function getBoxes(req, res) {
    try {
        const boxes = await Box.getAllBoxes();
        res.status(200).json(boxes);
    } catch (error) {
        console.log(error);
    }
}
// async function createBox(req, res) {}

module.exports = {
    getBoxes,
};
