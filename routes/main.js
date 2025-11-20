const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

const { isLoggedIn } = require('../middleware');
const catchAsync = require('../utils/catchAsync')

router.get('/inflation', isLoggedIn,  catchAsync(controller.getInflationData));

router.get('/stock',isLoggedIn, catchAsync(controller.getStockData));

router.get('/news', isLoggedIn, catchAsync(controller.getNewsArticles));

router.get('/worldbank-docs', isLoggedIn, catchAsync(controller.getWorldBankDocs));

router.get('/gdp', isLoggedIn, catchAsync(controller.getGDP));

router.get('/labour-market', isLoggedIn, catchAsync(controller.labourMarketData))

module.exports = router;