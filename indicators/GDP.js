const  ExpressError = require('../utils/expressError');
// GDP (current USD)
// GDP per capita
// GDP growth (%)

// Source: World Bank API

//GDP (Current USD)
async function getGDP(country){
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NY.GDP.MKTP.CD?format=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }catch (error) {
        console.error("Request failed:", error);
    }
}

module.exports = { getGDP };