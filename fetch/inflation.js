const ExpressError = require('../utils/ExpressError');

// Async function to get inflation data
async function getInflation(country) {
  const url = `https://api.api-ninjas.com/v1/inflation?country=${encodeURIComponent(country)}`;


const apiKey  = process.env.INFLATION_API_KEY

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey
      }
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
      throw new ExpressError(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
}

module.exports = { getInflation };