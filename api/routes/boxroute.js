// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { createBox } = require('../controllers/user.js');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.post('/create', createBox);

module.exports = router;
