// DEPENDENCIES
const express = require('express');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.get('/', (req, res) => {
    res.status(200).json({ message: 'hello' });
});

module.exports = router;
