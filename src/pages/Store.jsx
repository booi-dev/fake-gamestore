import { useEffect } from 'react';
import fetchData, { createQuery } from '../utils/fetch';
import StoreHero from "../components/store/StoreHero";
import Recommendation from '../components/recommendation/Recommendation';

function Store() {
    const searchQuery = 'dead';
    const query = createQuery('search', searchQuery);

    useEffect(() => {
        fetchData('games', query);
    }, []);

    return (
        <div className='store'>
            <StoreHero />
            <Recommendation />
        </div>
    );
}

export default Store;