import axios from "axios";

// https://api.rawg.io/api/games?page_size=5&genre%20=%20action

const api = {
    BASE_URL: 'https://api.rawg.io/api/',
    KEY: "ed4007e9ce974a66b5aaae4f47858eff",
};

const createEndpoint = function getUrlEndpoint(endpoint) {
    return endpoint;
};

const createQueryParams = function getQueryParams(query, value) {
    return `${query}=${value}`;
};

const createCompleteURL = function getCompleteApiURL(endpoint, queryParams) {
    return `${api.BASE_URL}${endpoint}?${queryParams}&key=${api.KEY}`;
};

function fetchData(url) {
    console.log(url);
    let data;
    axios.get(url)
        .then((res) => {
            data = res.data;
            console.log(res.data.results);
        })
        .catch((err) => {
            console.log(err);
        });

    return data;
}

export default fetchData;

export {
    createEndpoint,
    createQueryParams,
    createCompleteURL,
};
