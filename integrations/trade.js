const ExpressError = require('../utils/expressError');


// Trade Export Data of a country
const exportData = async(country)=>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NE.EXP.GNFS.CD?format=json`;

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

// Trade Import Data
const importData = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NE.IMP.GNFS.CD?format=json`;

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

const exportGrowth = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NE.EXP.GNFS.KD.ZG?format=json`;
    
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
const importGrowth = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/NE.IMP.GNFS.KD.ZG?format=json`;
    
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


module.exports = { exportData, importData, exportGrowth, importGrowth };