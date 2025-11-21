const ExpressError = require('../utils/expressError');

const oilPrice = async ()=>{
    const apiKey = process.env.EIA_API_KEY;
    const url = `https://api.eia.gov/v2/petroleum/pri/spt/data/?api_key=${apiKey}&frequency=daily`;

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


const naturalGasPrice = async() =>{
    const apiKey = process.env.EIA_API_KEY;
    const url = `https://api.eia.gov/v2/natural-gas/pri/fut/data/?api_key=${apiKey}`;

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
}

module.exports = {oilPrice, naturalGasPrice}