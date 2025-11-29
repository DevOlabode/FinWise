const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

const { isLoggedIn } = require('../middleware');
const catchAsync = require('../utils/catchAsync')

router.get('/inflation',  catchAsync(controller.getInflationData));

router.get('/stock', catchAsync(controller.getStockData));

router.get('/news', catchAsync(controller.getNewsArticles));

router.get('/worldbank-docs', isLoggedIn, catchAsync(controller.getWorldBankDocs));

router.get('/gdp', catchAsync(controller.getGDP));

router.get('/labour-market', catchAsync(controller.labourMarketData));

router.get('/monetary', catchAsync(controller.monetary));

router.get('/exchange-rate', catchAsync(controller.exchangeRate));

router.get('/government', catchAsync(controller.government));

router.get('/trade', catchAsync(controller.tradeData));

router.get('/commodity', catchAsync(controller.commodity));

router.get('/population', catchAsync(controller.population));

module.exports = router;