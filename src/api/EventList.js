import axios  from 'axios';


export const EventList = async (queryParams) => {
  let queryString = '?';

   //Make sure keyvalues are properly formatted as described earlier in the docs.
   if (queryParams.keyvalues) {
    const stringKeyValues = JSON.stringify(queryParams.keyvalues);
    queryString = queryString + `metadata[keyvalues]=${stringKeyValues}`;
    }
    const url = `https://api.pinata.cloud/data/pinList?status=pinned&${queryString}`;
    return axios
        .get(url, {
            headers: {
                pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
                pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY
            }
        })
        .then(function (response) {
            // console.log(response)
            const eventList = response.data.rows
            console.log(eventList)
            return eventList
        })
        .catch(function (error) {
            console.log(error)
        });
} 
