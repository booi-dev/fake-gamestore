import { useEffect } from 'react';
import fetchData, { createEndpoint, createQueryParams, createCompleteURL } from '../utils/fetch';
import StoreHero from "../components/store/StoreHero";

function Store() {
    const searchQuery = 'dead';
    const endPoint = createEndpoint('games');
    const queryParms = createQueryParams('search', searchQuery);
    const initialUrl = createCompleteURL(endPoint, queryParms);

    useEffect(() => {
        fetchData(initialUrl);
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