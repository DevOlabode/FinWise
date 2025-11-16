async function getWorldBankDocs(country, keyword = "economics") {
    const country = req.query.country || "Nigeria";
    const keyword = req.query.keyword || "economic policy";
  const url = `https://search.worldbank.org/api/v3/wds?format=json&count_exact=${encodeURIComponent(country)}&qterm=${encodeURIComponent(keyword)}&fl=docdt,docna,repnme,url,pdfurl&rows=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.documents) {
      console.log(`Found ${Object.keys(data.documents).length} documents for ${country}:`);
      for (const [id, doc] of Object.entries(data.documents)) {
        console.log(`- ${doc.docna} (${doc.docdt})`);
        console.log(`  PDF: ${doc.pdfurl}`);
      }
    } else {
      console.log("No documents found.");
    }

    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
}

// Example usage
getWorldBankDocs("Nigeria", "economic policy");