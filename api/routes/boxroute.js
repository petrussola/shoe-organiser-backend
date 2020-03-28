// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { getBoxes, createBox, deleteBox } = require('../controllers/box');

// MIDDLEWARE
const { checkBoxIdParams } = require('../middleware/boxMiddleware');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.get('/', getBoxes);
router.post('/create', createBox);
router.delete('/:boxNumber/delete', [checkBoxIdParams], deleteBox);

module.exports = router;
