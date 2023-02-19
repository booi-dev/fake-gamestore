import axios from "axios";
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

const fetchDatum = async function fetchAGameDatum(gameId) {
    const url = `${api.BASE_URL}games/${gameId}?key=${api.KEY}`;
    // console.log(url);
    let data;
    await axios.get(url)
        .then((res) => {
            const result = res.data;
            data = ({
                // ...result,

                id: result.id,
                name: result.name,
                genres: result.genres,
                released: result.released,
                background_image: result.background_image,
                parent_platforms: result.parent_platforms,
                tags: result.tags,
                description_raw: result.description_raw,
                background_image_additional: result.background_image_additional,
                esrb_rating: result.esrb_rating,
                metacritic: result.metacritic,
                developers: result.developers,
                publishers: result.publishers,

                formattedReleasedDate: formatDate(result?.released),
                price: setPrice(result)
            });
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
            data = err.code;
        });
    return data;
};

const fetchData = async function fetchGameData(endpoint, queryParams) {
    const url = `${api.BASE_URL}${endpoint}?${queryParams}&key=${api.KEY}`;
    // console.log(url);
    let data;
    await axios.get(url)
        .then((res) => {
            const result = res.data.results;
            data = result.map(game => ({
                // ...game,
                id: game.id,
                name: game.name,
                genres: game.genres,
                released: game.released,
                background_image: game.background_image,
                parent_platforms: game.parent_platforms,
                tags: game.tags,
                short_screenshots: game.short_screenshots,

                formattedReleasedDate: formatDate(game?.released),
                price: setPrice(game)
            }));
            // console.log(data);
        })
        .catch((err) => {
            console.log(err);
            data = err.code;
        });
    return data;
};

export default fetchData;

export {
    fetchDatum,
    createEndpoint,
    createQuery,
    createMultiQuery,
};
