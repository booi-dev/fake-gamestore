import StoreHero from "../components/store/StoreHero";
import Recommendation from '../components/recommendation/Recommendation';
import BrowseCategory from "../components/categories/BrowseCategory";

function Store() {

    return (
        <div className='store'>
            <StoreHero />
            <Recommendation />
            <BrowseCategory />
        </div>
    );
}

export default Store;