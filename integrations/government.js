const ExpressError = require('../utils/expressError');

// Government Revenues
const GovRevenue = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/GC.REV.XGRT.GD.ZS?format=json`;

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

// Government Spending...
const GovSpending = async(country) =>{
  const url = `https://api.worldbank.org/v2/country/${country}/indicator/NE.CON.GOVT.ZS?format=json`;
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

const publicDebt = async(country) =>{
  const url = `https://api.worldbank.org/v2/country/CAN/indicator/GC.DOD.TOTL.GD.ZS?format=json`;
  
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
}

module.exports = {GovRevenue, GovSpending, publicDebt};

// budget : surplus/deficit
// api url : https://api.worldbank.org/v2/country/CAN/indicator/GC.BAL.CASH.GD.ZS?format=json

//Public Debt
//api url : https://api.worldbank.org/v2/country/CAN/indicator/GC.DOD.TOTL.GD.ZS?format=json