import React from 'react';
// categor
import categoryAction from '../../assets/categories/action.png';
import categorAnime from '../../assets/categories/anime.png';
import categorCasual from '../../assets/categories/casual.png';
import categorFighting from '../../assets/categories/fighting.png';
import categorHorror from '../../assets/categories/horror.png';
import categorMultiplayer from '../../assets/categories/multiplayer.png';
import categorPuzzle from '../../assets/categories/puzzle.png';
import categorRacing from '../../assets/categories/racing.png';
import categoryRogueLike from '../../assets/categories/rogue_like.png';
import categoryRgp from '../../assets/categories/rpg.png';
import categorySciFi from '../../assets/categories/science_fiction.png';
import categorySports from '../../assets/categories/sports.png';
import categoryStoryRich from '../../assets/categories/story_rich.png';
import categoryStrategy from '../../assets/categories/strategy.png';
import categoryCityBuilding from '../../assets/categories/city_building.png';
import categorySurvival from '../../assets/categories/survival.png';

function Categories() {

    const categoryPictures = {
        categoryAction, categorAnime, categorCasual, categorFighting, categorHorror, categorMultiplayer, categorPuzzle, categorRacing, categoryRogueLike, categoryRgp, categorySciFi, categorySports, categoryStoryRich, categoryStrategy, categoryCityBuilding, categorySurvival
    };

    return (
        <>
            <div className='grp_title'>BROWSE BY CATEGORY</div>
            <div className='app-container'>
                <img src={categoryPictures.categorAnime} alt='' />
            </div>
        </>
    );
}

export default Categories;