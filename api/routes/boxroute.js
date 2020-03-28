// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { getBoxes } = require('../controllers/box');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.get('/', getBoxes);
// router.post('/create', createBox);

module.exports = router;
