const ExpressError = require('../utils/expressError');

const industrialProd = async (countryCode = "CAN") => {
    const url = `https://stats.oecd.org/restsdmx/sdmx.ashx/GetDataStructure/MEI_REAL`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Error response text:", await response.text());
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Request failed:", error);
    }
};



module.exports = { industrialProd };