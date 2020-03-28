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
    const { boxNumber } = req.params;
    try {
        const deleted = await Box.deleteBox(boxNumber);
        if (deleted) {
            res.status(200).json({
                message: `Box ${boxNumber} has been succesfully deleted`,
            });
        } else {
            throw new Error(
                'There was a problem deleting your box. Please try again.'
            );
        }
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

module.exports = {
    getBoxes,
    createBox,
    deleteBox,
};
