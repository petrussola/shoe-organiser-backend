// DEPENDENCIES
const express = require('express');

// CONTROLLERS

const { getShoesByUserId, getShoesById } = require('../controllers/shoe');

// MIDDLEWARE
const { isUserAuthorized } = require('../middleware/authMiddleware');

// INSTANTIATE ROUTE
const router = express.Router();

// ENDPOINTS
router.get('/', isUserAuthorized, getShoesByUserId);
router.get('/:shoeId', isUserAuthorized, getShoesById);

module.exports = router;
