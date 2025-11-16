const ExpressError = require('../utils/ExpressError');

// Async Function to get news data from the NewsAPI

const getNewsData = async (query) => {
    const apiKey = process.env.NEWS_API_KEY;

    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            const errorText = await response.text();
            console.error("Error response text:", errorText);
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Request failed:", error);
    }
}

module.exports = { getNewsData };