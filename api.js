const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://shy-puce-xerus-ring.cyclic.app/tera?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};


