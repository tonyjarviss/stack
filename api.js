const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://79d752ff-1e8f-456f-8fc4-3d72083c6d9d-00-36xkoo8dnwxoq.sisko.replit.dev/terabox?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};


