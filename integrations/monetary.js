//Central Bank Policy Rate.

const centralBankPolicyRate = async(country) =>{
    const url = `https://www.imf.org/-/media/Files/Data/IMFAPI/IFS/${country}/FPOLRATE`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            const errorText = await response.text();
            console.error("Error response text:", errorText);
            throw new ExpressError(`Error: ${response.status} ${response.statusText}`, response.status);
        };
        const data = await response.json();
        return data
    }catch(error){
        console.error('Request Failed', error);
    }
}

module.exports = {centralBankPolicyRate}