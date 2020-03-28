// MODELS
const Box = require('../../models/box');

async function getBoxes(req, res) {
    try {
        const boxes = await Box.getAllBoxes();
        res.status(200).json(boxes);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: `There was a problem fetching the boxes: ${error.message}`,
        });
    }
}
// async function createBox(req, res) {}

module.exports = {
    getBoxes,
};
