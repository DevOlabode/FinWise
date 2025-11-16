const {getInflation,getInflationRate, fredInflationData } = require('../fetchAPI/inflation');
const { getStockData } = require('../fetchAPI/stock');
const { getNewsData } = require('../fetchAPI/news');
const { getWorldBankDocs } = require('../fetchAPI/worldBank');

const User = require('../models/user');

module.exports.getInflationData = async (req, res, next) => {
    const country = req.user.region || 'Canada';
    const seriesId = req.user.fredSeriesId || 'CPIAUCSL';
    
    const data = await getInflation(country);
    const rateData = await getInflationRate(country);
    const fredData = await fredInflationData(seriesId);

    res.status(200).json({ inflationData: data, fredData : fredData, inflationRateData: rateData });
}; 

module.exports.getStockData = async(req, res)=>{
    const stockTicker = req.user.ticker || 'AAPL';

    const stockData = await getStockData(stockTicker);
    res.status(200).json({ stockData: stockData });
};

module.exports.getNewsArticles = async (req, res) =>{
    const query = req.query.q || 'economics';

    const articles = await getNewsData(query);
    res.status(200).json({ articles: articles });
};

module.exports.getWorldBankDocs = async (req, res) => {
    const {country='Canada', keyword='economics'} = req.query;   
    const docs = await getWorldBankDocs(country, keyword);
    res.status(200).json({ documents: docs });
};