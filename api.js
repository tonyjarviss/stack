const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://f1fa2d62-d87a-419e-9eac-c18d46fb30fa-00-1yh3gcsimvkyu.sisko.replit.dev//api?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};


