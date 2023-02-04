import axios from "axios";
import setPrice from './setPrice';

// https://api.rawg.io/api/games?page_size=5&genre%20=%20action

const api = {
    BASE_URL: 'https://api.rawg.io/api/',
    KEY: "ed4007e9ce974a66b5aaae4f47858eff",
};

const createEndpoint = function getUrlEndpoint(endpoint) {
    return endpoint;
};

const createQuery = function createQueryParams(query, value) {
    return `${query}=${value}`;
};

const createMultiQuery = function createOneQueryFromManyquery(arr) {
    return arr.join("&");
};

const createCompleteURL = function createCompleteApiURL(endpoint, queryParams) {
    return `${api.BASE_URL}${endpoint}?${queryParams}&key=${api.KEY}`;
};


const fetchData = async function fetchGameData(endpoint, queryParams) {
    const url = queryParams
        ? createCompleteURL(endpoint, queryParams)
        : createCompleteURL(endpoint);
    // createCompleteURL(endpoint, queryParams);
    console.log(url);
    let data;
    await axios.get(url)
        .then((res) => {
            const result = res.data.results;
            data = result.map(game => ({ ...game, price: setPrice(game) }));
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
            data = err.code;
        });
    return data;
};

export default fetchData;

export {
    createEndpoint,
    createQuery,
    createMultiQuery,
    createCompleteURL
};
