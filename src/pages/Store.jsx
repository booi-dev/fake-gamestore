// import { useEffect } from 'react';
// import fetchData, { createQuery } from '../utils/fetch';
// import StoreHero from "../components/store/StoreHero";
import SearchHeader from "../components/search/SearchHeader";
import Recommendation from '../components/recommendation/Recommendation';
import BrowseCategory from "../components/categories/BrowseCategory";

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
            <BrowseCategory />
        </div>
    );
}

export default Store;