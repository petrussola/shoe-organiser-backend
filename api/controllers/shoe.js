// MODELS
const Shoe = require('../../models/shoe');

async function getShoesByUserId(req, res) {
    const { userId } = req;
    try {
        const shoes = await Shoe.getAllShoesByUserId({ userId });
        res.status(200).json({ status: 'success', data: shoes });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

async function getShoesById(req, res) {
    const { shoeId } = req.params;
    const { userId } = req;
    try {
        const shoe = await Shoe.getShoeById(parseInt(shoeId, 10), userId);
        res.status(200).json({ status: 'success', data: shoe });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

module.exports = {
    getShoesByUserId,
    getShoesById,
};
