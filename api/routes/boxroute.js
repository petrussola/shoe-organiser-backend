// DEPENDENCIES
const express = require('express');

// CONTROLLERS
const {
    getBoxes,
    createBox,
    deleteBox,
    editBox,
} = require('../controllers/box');

// MIDDLEWARE
const {
    checkBoxIdParams,
    checkBoxIdBody,
} = require('../middleware/boxMiddleware');
const { isUserAuthorized } = require('../middleware/authMiddleware');

// INSTANTIATE ROUTER
const router = express.Router();

// ENDPOINTS
router.get('/', isUserAuthorized, getBoxes);
router.post('/create', [isUserAuthorized, checkBoxIdBody], createBox);
router.delete(
    '/:boxNumber/delete',
    [isUserAuthorized, checkBoxIdParams],
    deleteBox
);
router.put('/:boxNumber/edit', [isUserAuthorized, checkBoxIdParams], editBox);

module.exports = router;
