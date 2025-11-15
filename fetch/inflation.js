// Async function to get inflation data
async function getInflation(country) {
  const url = `https://api.api-ninjas.com/v1/inflation?country=${encodeURIComponent(country)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.INFLATION_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Inflation data for ${country}:`, data);
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
}

module.exports = { getInflation };