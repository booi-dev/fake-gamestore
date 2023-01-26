import axios from "axios";

const api = {
    BASE_URL: 'https://api.rawg.io/api/',
    KEY: "ed4007e9ce974a66b5aaae4f47858eff",
};

const getEndpoint = function getUrlEndpoint(endpoint) {
    return endpoint;
};

const getQueryParams = function getQueryParams(query, value) {
    return `${query}=${value}`;
};

const getCompleteURL = function getCompleteApiURL(endpoint, queryParams) {
    // const endpoint = getEndpoint('games');
    return `${api.BASE_URL}${endpoint}?${queryParams}&key=${api.KEY}`;
};

function useFetch(url) {
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

export default useFetch;

export {
    getEndpoint,
    getQueryParams,
    getCompleteURL,
};
