const unemploymentRate = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/SL.UEM.TOTL.ZS?format=json`;

    try{
        const response = await fetch(url);

        if(!response.ok){
            const errorText = await response.text();
            console.error("Error response text:", errorText);
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
        }
        const data = await response.json();
        return data
    }catch (err){
        console.error('Request Failed: ', err)
    }
};


const youthUnemploymentRate = async(country) =>{
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/SL.UEM.1524.ZS?format=json`;
    try{
        const response = await fetch(url);

        if(!response.ok){
            const errorText = await response.text();
            console.error("Error response text:", errorText);
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
        };
        const data = await response.json();
        console.log(data)
        return data
    }catch(error){
        console.error('Request Failed', error);
    }
}

module.exports = {unemploymentRate, youthUnemploymentRate};