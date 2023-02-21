import { Element } from "react-scroll";

import StoreHero from "../components/store/StoreHero";
import GameLatest from "../components/game/GameLatest";
import Footer from '../layouts/Footer';

function Store() {

    return (
        <div className='store'>
            <StoreHero />
            <Element name="browse-games-title" />
            <div className="app-flex-center" id="browse-games-title">
                <h1 className="app-group-title fs-xl"> LATEST GAMES</h1>
            </div>
            <GameLatest />
            <Footer />
        </div>
    );
}

export default Store;