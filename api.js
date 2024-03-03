const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://6229f56a-ea18-4a07-b514-e8d8d32b7b36-00-15pr5d1nprwqy.sisko.replit.dev/terabox?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
