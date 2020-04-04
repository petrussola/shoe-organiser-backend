// MODELS
const Box = require('../../models/box');

async function getBoxes(req, res) {
    const { userId } = req;
    try {
        const boxes = await Box.getAllBoxes({ userId });
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
    const { userId } = req;
    try {
        const newBox = await Box.createBox(boxNumber, userId);
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
    const { boxNumber } = req;
    try {
        // eslint-disable-next-line no-unused-vars
        const deleted = await Box.deleteBox(boxNumber);
        res.status(200).json({
            status: 'success',
            message: `Box ${req.boxNumber} has been succesfully deleted`,
        });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

async function editBox(req, res) {
    const { boxNumber } = req;
    const newBoxNumber = req.body.boxNumber;
    if (boxNumber !== newBoxNumber) {
        try {
            const newBox = await Box.editBox(boxNumber, newBoxNumber);
            res.status(200).json({
                status: 'success',
                message: `Box ${boxNumber} has been edited. The new number is ${newBoxNumber}`,
                data: newBox,
            });
        } catch (error) {
            res.status(500).json({ status: 'fail', message: error.message });
        }
    } else {
        res.status(500).json({
            status: 'fail',
            message: `Please select a new number. The one provided (${newBoxNumber}) is the same as the existing one: ${boxNumber}.`,
        });
    }
}

module.exports = {
    getBoxes,
    createBox,
    deleteBox,
    editBox,
};
