
const ExpressError = require('../utils/ExpressError');

async function getStockData(ticker) {
  const apiKey = process.env.STOCK_API_KEY; 
  const url = `https://eodhd.com/api/eod/${ticker}?api_token=${apiKey}&fmt=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Error response text:", await response.text());
      throw new ExpressError(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};

module.exports = { getStockData };