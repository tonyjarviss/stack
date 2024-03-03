const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://db-6jy.pages.dev/terabox?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};


