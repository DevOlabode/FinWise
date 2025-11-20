const {getInflation,getInflationRate, fredInflationData } = require('../integrations/inflation');
const { getStockData } = require('../integrations/stock');
const { getNewsData } = require('../integrations/news');
const { getWorldBankDocs } = require('../integrations/worldBank');
const { getGDP, GDPperCapital, GDPGrowth } = require('../integrations/GDP');
const { unemploymentRate, youthUnemploymentRate, employmentToPopulation } = require('../integrations/labourMarket');
const { centralBankPolicyRate } = require('../integrations/monetary')

const User = require('../models/user');

module.exports.getInflationData = async (req, res, next) => {
    const country = req.user.region || 'Canada';
    const seriesId = req.user.fredSeriesId || 'CPIAUCSL';
    
    const data = await getInflation(country);
    const rateData = await getInflationRate(country);
    const fredData = await fredInflationData(seriesId);

    res.status(200).json({ inflationData: data, fredData : rateData, inflationRateData: fredData });
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

module.exports.getGDP = async(req, res)=>{
    const { country = 'CAN' } = req.query;

    const GDPdata = await getGDP(country);
    const perCapital = await GDPperCapital(country)
    const growth = await GDPGrowth(country)

    res.status(200).json({GDP_data : GDPdata, GDPperCapital : perCapital, GDPGrowth : growth})
};

module.exports.labourMarketData = async(req, res)=>{
    const {country = 'CAN'} = req.query;
    const getUnemploymentRate = await unemploymentRate(country);
    const youthUnemploymentRateData = await youthUnemploymentRate(country);
    const employmentToPopulationData = await employmentToPopulation(country)
    res.status(200).json({unemploymentRate : getUnemploymentRate, youthUnemploymentRate : youthUnemploymentRateData, employmentToPopulationRatio : employmentToPopulationData})
};

module.exports.monetary = async(req, res)=>{
    const {country = 'CAN'} = req.query;
}