import { useEffect, useState } from 'react';

import categoryAction from '../../assets/categories/action.png';
import categorAnime from '../../assets/categories/anime.png';
import categorCasual from '../../assets/categories/casual.png';
import categorFighting from '../../assets/categories/fighting.png';
import categorHorror from '../../assets/categories/horror.png';
import categorMultiplayer from '../../assets/categories/multiplayer.png';
import categorPuzzle from '../../assets/categories/puzzle.png';
import categorRacing from '../../assets/categories/racing.png';
import categoryRogueLike from '../../assets/categories/rogue_like.png';
import categoryRpg from '../../assets/categories/rpg.png';
import categorySciFi from '../../assets/categories/science_fiction.png';
import categorySports from '../../assets/categories/sports.png';
import categoryStoryRich from '../../assets/categories/story_rich.png';
import categoryStrategy from '../../assets/categories/strategy.png';
import categoryCityBuilding from '../../assets/categories/city_building.png';
import categorySurvival from '../../assets/categories/survival.png';

function BrowseCategory() {

    const categoryPictures = [
        { pic: categoryAction, slug: 'action' },
        { pic: categorAnime, slug: 'anime' },
        { pic: categorCasual, slug: 'casual' },
        { pic: categorFighting, slug: 'fighting' },
        { pic: categorHorror, slug: 'horro' },
        { pic: categorMultiplayer, slug: 'multiplayer' },
        { pic: categorPuzzle, slug: 'puzzle' },
        { pic: categorRacing, slug: 'racing' },
        { pic: categoryRogueLike, slug: 'rogue_like' },
        { pic: categoryRpg, slug: 'rpg' },
        { pic: categorySciFi, slug: 'sci_fi' },
        { pic: categorySports, slug: 'sports' },
        { pic: categoryStoryRich, slug: 'story_rich' },
        { pic: categoryStrategy, slug: 'strategy' },
        { pic: categoryCityBuilding, slug: 'city-building' },
        { pic: categorySurvival, slug: 'survival' },
    ];

    const [carousel, setCarousel] = useState([]);

    const categoryCarousel = function createCategoryCarousel(page = 0) {
        setCarousel(() => categoryPictures.slice(page, 3));
    };

    useEffect(() => {
        categoryCarousel();
    }, []);

    // console.log(carousel());

    return (
        <>
            <div className='grp_title'>BROWSE BY CATEGORY</div>
            <div className='app-container'>
                <img src={categoryPictures[3].pic} alt='' />
                {carousel.map((data) => <img src={data.pic} alt='' key={data.slug} />)}
            </div>
        </>
    );
}

export default BrowseCategory;