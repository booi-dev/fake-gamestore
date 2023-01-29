import axios from "axios";

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

async function fetchData(endpoint, queryParams) {
    const url = createCompleteURL(endpoint, queryParams);
    console.log(url);
    let data;
    await axios.get(url)
        .then((res) => {
            data = res.data.results;
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            data = err.code;
        });
    return data;
}

export default fetchData;

export {
    createEndpoint,
    createQuery,
    createMultiQuery,
    createCompleteURL
};
