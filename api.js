const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://media-downloader-api.vercel.app/instagram?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};


