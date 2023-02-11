import SearchHeader from "../components/search/SearchHeader";
import Recommendation from '../components/recommendation/Recommendation';
import BrowseCategory from "../components/categories/BrowseCategory";

function Store() {
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