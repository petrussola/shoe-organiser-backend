// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const { getBoxes, createBox, deleteBox } = require('../controllers/box');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.get('/', getBoxes);
router.post('/create', createBox);
router.delete('/:boxNumber/delete', deleteBox);

module.exports = router;
