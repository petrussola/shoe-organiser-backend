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
async function createBox(req, res) {
    const { boxNumber } = req.body;
    try {
        const newBox = await Box.createBox(boxNumber);
        return res.status(200).json({
            status: 'success',
            message: 'New box has been created',
            data: newBox,
        });
    } catch (error) {
        return res.status(500).json({ status: 'fail', message: error.message });
    }
}

async function deleteBox(req, res) {
    try {
        // eslint-disable-next-line no-unused-vars
        const deleted = await Box.deleteBox(req.boxNumber);
        res.status(200).json({
            status: 'success',
            message: `Box ${req.boxNumber} has been succesfully deleted`,
        });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

module.exports = {
    getBoxes,
    createBox,
    deleteBox,
};
