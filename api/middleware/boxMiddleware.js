// MODELS
const Box = require('../../models/box');

// checks if box id exists. We need it before editing or deleting a box
async function checkBoxIdParams(req, res, next) {
    const { boxNumber } = req.params;
    try {
        const box = await Box.getBoxById(boxNumber);
        if (box) {
            req.boxNumber = boxNumber;
            next();
        } else {
            throw new Error(`Box ${boxNumber} does not exist`);
        }
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}
// checks if the required fields are passed to the model. Necessary to create a box
async function checkBoxIdBody(req, res, next) {
    const { boxNumber } = req.body;
    try {
        const box = await Box.getBoxById(boxNumber);
        if (!box) {
            req.boxNumber = boxNumber;
            next();
        } else {
            throw new Error(
                `Box ${boxNumber} already exists. Please choose another number`
            );
        }
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

module.exports = {
    checkBoxIdParams,
    checkBoxIdBody,
};
