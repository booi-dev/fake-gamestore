/* eslint-disable */
import { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";
import useFetch, { getEndpoint, getQueryParams, getCompleteURL } from '../utils/fetch';
import StoreHero from "../components/store/StoreHero";

function Store() {

    const endPoint = getEndpoint('games');

    const [search, setSearch] = useState("dead")
    const queryParms = getQueryParams('search', search)

    const initialUrl = getCompleteURL(endPoint, queryParms);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        console.log(url)
        useFetch(url);
    }, [url]);

    const getSearchQuery = function (query) {
        setSearch(query)
    }

    return (
        <div className='store'>
            <StoreHero
                getSearchQuery={getSearchQuery}
            />
            <div className='store_container'>
                i dont care
            </div>
        </div>
    );
}

export default Store;