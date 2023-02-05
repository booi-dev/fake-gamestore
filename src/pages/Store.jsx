// import { useEffect } from 'react';
// import fetchData, { createQuery } from '../utils/fetch';
// import StoreHero from "../components/store/StoreHero";
import SearchHeader from "../components/search/SearchHeader";
import Recommendation from '../components/recommendation/Recommendation';

function Store() {
    // const searchQuery = 'dead';
    // const query = createQuery('search', searchQuery);
    // useEffect(() => {
    //     fetchData('games', query);
    // }, []);

    return (
        <div className='store'>
            {/* <StoreHero /> */}
            <SearchHeader />
            <Recommendation />
        </div>
    );
}

export default Store;