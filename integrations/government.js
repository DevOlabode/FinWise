const ExpressError = require('../utils/expressError');

// Government Revenues
const GovRevenue = async(country) =>{
    const url = `https://dataservices.imf.org/REST/SDMX_JSON.svc/CompactData/GFSR/${country}.GOVREV`
    // https://dataservices.imf.org/REST/SDMX_JSON.svc/CompactData/GFSR/${country}.GOVREV
    // https://dataservices.imf.org/REST/SDMX_JSON.svc/CompactData/GFSR/CAN.GOVREV

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

module.exports = {GovRevenue};