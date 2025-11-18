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
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, 404);
        }
        const data = await response.json();
        return data;
    }catch (error) {
        console.error("Request failed:", error);
    }
}

//GPD Per Capital

const GDPperCapital = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NY.GDP.PCAP.CD?format=json`;

    try{
        const response = await fetch(url);
        if(!response.ok) {
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status)
        }
        const data  = await response.json();
        return data
    }catch(err){
        console.error('Request Failed: ', err)
    }
}

//GDP Growth.

const GDPgrowth = async(country)=>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NY.GDP.MKTP.KD.ZG?format=json`;
    try {
        const response  = await fetch(url);
    }
}

module.exports = { getGDP, GDPperCapital };