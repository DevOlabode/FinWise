const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

const { isLoggedIn } = require('../middleware');

router.get('/inflation', isLoggedIn,  controller.getInflationData);

router.get('/stock',isLoggedIn, controller.getStockData);

router.get('/news', isLoggedIn, controller.getNewsArticles);

router.get('/worldbank-docs', isLoggedIn, controller.getWorldBankDocs);

module.exports = router;