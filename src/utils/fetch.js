import axios from "axios";
import debounce from 'debounce-promise';

// import debounce from "./debounce";
import setPrice from './setPrice';
import formatDate from "./formatDate";

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

const fetchDatum = async (gameId) => {
    const url = `${api.BASE_URL}games/${gameId}?key=${api.KEY}`;
    let data;
    await axios.get(url)
        .then((res) => {
            console.log('fetch datum');
            const result = res.data;
            data = ({
                ...result,

                formattedReleasedDate: formatDate(result?.released),
                price: setPrice(result)
            });
        })
        .catch((err) => {
            console.log(err);
            data = err.code;
        });
    console.log(data);
    return data;
};

const fetchData = async (endpoint, queryParams) => {
    console.log('fetch data');

    const url = `${api.BASE_URL}${endpoint}?${queryParams}&key=${api.KEY}`;
    let data;
    await axios.get(url)
        .then((res) => {
            const result = res.data.results;
            data = result.map(game => ({
                ...game,
                formattedReleasedDate: formatDate(game?.released),
                price: setPrice(game)
            }));
        })
        .catch((err) => {
            console.log(err);
            data = err.code;
        });
    return data;
};

const debouncedFetchData = debounce(fetchData, 500);

export default fetchData;

export {
    fetchDatum,
    createEndpoint,
    createQuery,
    createMultiQuery,
    debouncedFetchData
};
