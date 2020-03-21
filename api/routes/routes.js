// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { testEndpoint } = require('../controllers/controller');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.get('/', testEndpoint);

module.exports = router;
