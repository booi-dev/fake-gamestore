import { useState, useCallBack } from 'react';
import axios from 'axios';

const api = {
    BASE_URL: 'https://api.rawg.io/api/',
    KEY: "ed4007e9ce974a66b5aaae4f47858eff",
};

const getEndpoint = function getUrlEndpoint(endpoint) {
    return endpoint;
};

const getQueryParams = function getQueryParams(params, value) {
    return `${params}=${value}`;
};

const getCompleteURL = function getCompleteApiURL(queryParams) {
    const endpoint = getEndpoint('games');
    return `${api.BASE_URL}${endpoint}?${queryParams}&key=${api.KEY}`;
};

/* eslint-disable */

function useFetch() {
    const [data, setdata] = useState();
    const fetchData = useCallBack(() => {
        axios.get(`https://api.rawg.io/api/games?search='dead cell'&key=${api.KEY}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return [];
}

export {
    getEndpoint,
    getQueryParams,
    getCompleteURL,
    useFetch
};