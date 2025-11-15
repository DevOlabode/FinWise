const {getInflation,getInflationRate } = require('../fetch/inflation');
const { getStockData } = require('../fetch/stock');

const User = require('../models/user');

module.exports.getInflationData = async (req, res, next) => {
    const country = req.user.region || 'Canada';
    
    const data = await getInflation(country);
    const rateData = await getInflationRate(country);

    res.status(200).json({ inflationData: data, inflationRateData: rateData });
};


module.exports.getStockData = async(req, res)=>{
    const stockTicker = req.user.ticker || 'AAPL';

    const stockData = await getStockData(stockTicker);
    res.status(200).json({ stockData: stockData });
};