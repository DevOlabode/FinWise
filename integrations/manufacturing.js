// industrial Production Index
const ExpressError = require('../utils/expressError');

const industrialProd = async(country) =>{
    const url = `https://stats.oecd.org/sdmx-json/data/INDPROD/${country}.A/all`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
        }
        const data = await response.json();
        return data;
    }catch (error) {
        console.error("Request failed:", error);
    }
};

module.exports = { industrialProd };