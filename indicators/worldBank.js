const ExpressError = require('../utils/ExpressError');

async function getWorldBankDocs(country, keyword = "economics") {
  const url = `https://search.worldbank.org/api/v3/wds?format=json&count_exact=${encodeURIComponent(country)}&qterm=${encodeURIComponent(keyword)}&fl=docdt,docna,repnme,url,pdfurl&rows=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ExpressError(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
}

module.exports = { getWorldBankDocs };