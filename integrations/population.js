const population = async(country='CA') => {
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/SP.POP.TOTL?format=json`;
    
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
};

const populationGrowth = async(country = 'CA') =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/SP.POP.GROW?format=json`;
        
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
};

const lifeExpantancy = async(country='CA')=> {
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/SP.DYN.LE00.IN?format=json`;     

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }

};

module.exports = {population, populationGrowth, lifeExpantancy};