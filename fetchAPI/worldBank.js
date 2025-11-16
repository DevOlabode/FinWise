const ExpressError = require('../utils/ExpressError');


// This function returns URL to PDF Files from World Bank Documents & Reports API based on country and keyword
async function getWorldBankDocs(country, keyword = "economics") {
  const url = `https://search.worldbank.org/api/v3/wds?format=json&count_exact=${encodeURIComponent(country)}&qterm=${encodeURIComponent(keyword)}&fl=docdt,docna,repnme,url,pdfurl&rows=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
}

getWorldBankDocs("Nigeria", "economic policy");

// https://search.worldbank.org/api/v3/wds?format=json&qterm=economics&count_exact=Nigeria&fl=docdt,docna,repnme,abstracts,topic,subtopic,lang,url&rows=10
// https://search.worldbank.org/api/v3/wds?format=json&count_exact=${encodeURIComponent(country)}&qterm=${encodeURIComponent(keyword)}&fl=docdt,docna,repnme,url,pdfurl&rows=10

const getWorldBankData = async (country, keyword) => {
  const url = `https://search.worldbank.org/api/v3/wds?format=json&qterm=${keyword}&count_exact=${country}&fl=docdt,docna,repnme,abstracts,topic,subtopic,lang,url&rows=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    return data.documents;
  }catch (error) {
    throw new ExpressError("Failed to fetch World Bank data", 500);
  }
};

getWorldBankData("Nigeria", "economics");

module.exports = { getWorldBankDocs, getWorldBankData };