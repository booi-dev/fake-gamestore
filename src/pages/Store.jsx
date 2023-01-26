/* eslint-disable */

import { useEffect } from 'react';
import { getEndpoint, getQueryParams, getCompleteURL } from '../utils/fetch'
import useFetch from '../hooks/useFetch';
import StoreHero from "../components/store/StoreHero";

let API_KEY = 'ed4007e9ce974a66b5aaae4f47858eff';

function Store() {

    let url = `https://api.rawg.io/api/platforms?key=${API_KEY}`

    useEffect(() => {
        useFetch(url)
    }, []);

    return (
        <div className='store'>
            <StoreHero />
            <div className='store_container'>
                i dont care
            </div>
        </div>
    );
}

export default Store;