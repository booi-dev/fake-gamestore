import { useEffect } from 'react';
import fetchData, { createQuery } from '../utils/fetch';
import StoreHero from "../components/store/StoreHero";

function Store() {
    const searchQuery = 'dead';
    const query = createQuery('search', searchQuery);

    useEffect(() => {
        fetchData('games', query);
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