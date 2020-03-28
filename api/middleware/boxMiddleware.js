// MODELS
const Box = require('../../models/box');

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

module.exports = {
    checkBoxIdParams,
};
