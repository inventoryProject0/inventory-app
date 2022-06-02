const express = require("express");
const router = express.Router();

// different model routers
router.use('/sauces', require('./sauces'));
router.use('/users', require('./users'));
router.use('/items', require('./items'));
router.use('/orders', require('./orders'));

module.exports = router;
