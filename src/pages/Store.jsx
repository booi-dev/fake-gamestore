import StoreHero from "../components/store/StoreHero";
// import Recommendation from '../components/recommendation/Recommendation';
import BrowseCategory from "../components/categories/BrowseCategory";
import GameBrowse from "../components/game/GameBrowse";


function Store() {

    return (
        <div className='store'>
            <StoreHero />
            <div className="app-flex-center" id="browse-games-title">
                <h1 className="app-group-title fs-xl"> BROWSE LATEST GAMES</h1>
            </div>
            <GameBrowse />
            <BrowseCategory />
            {/* <Recommendation /> */}
        </div>
    );
}

export default Store;