const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

const { isLoggedIn } = require('../middleware');

router.get('/inflation', isLoggedIn, controller.getInflationData);

module.exports = router;