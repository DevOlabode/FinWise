const population = async(country) => {
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
}

module.exports = {population};