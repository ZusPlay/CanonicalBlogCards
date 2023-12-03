const express = require('express');
const router = require('express').Router();
const controller = require('../controllers/CardController');

router.get('/cards', controller.getAllCards);

router.use(function (_, res, next) {
    res.status(404);
    next();
});

module.exports = router;
