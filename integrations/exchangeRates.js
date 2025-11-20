const ExpressError = require('../utils/expressError');

const USDExchangeRate = async(country)=>{
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            const errorText = await response.text();
            console.error("Error response text:", errorText);
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
        };
        const data = await response.json();
        return data
    }catch(error){
        console.error('Request Failed', error);
    }
}

module.exports = {USDExchangeRate}