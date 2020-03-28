// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { createUser, loginUser } = require('../controllers/user.js');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.post('/register', createUser);
router.post('/login', loginUser);

module.exports = router;
