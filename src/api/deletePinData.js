const axios = require('axios');

export const removePinFromIPFS = (hashToUnpin) => {
    const url = `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`;
    return axios
        .delete(url, {
            headers: {
                pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
                pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY
            }
        })
        .then(function (response) {
            //handle response here
        })
        .catch(function (error) {
            //handle error here
        });
}