// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { createUser } = require('../controllers/user.js');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.post('/register', createUser);

module.exports = router;
