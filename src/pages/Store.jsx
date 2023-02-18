import StoreHero from "../components/store/StoreHero";
// import Recommendation from '../components/recommendation/Recommendation';
import BrowseCategory from "../components/categories/BrowseCategory";
import GameBrowse from "../components/game/GameBrowse";


function Store() {

    return (
        <div className='store'>
            <StoreHero />
            <GameBrowse />
            <BrowseCategory />
            {/* <Recommendation /> */}
        </div>
    );
}

export default Store;