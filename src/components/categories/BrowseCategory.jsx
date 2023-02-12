import { useEffect, useState } from 'react';
import './BrowseCategory.scss';

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

import { Prev, Next } from '../ui/PrevNext';
import useWinSize from '../../hooks/useWinSize';

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

    const winWidth = useWinSize();

    const categoryCarousel = function createCategoryCarousel(page = 0) {
        const carouselSize = winWidth < 500 ? 2 : 4;
        setCarousel(() => categoryPictures.slice(page, carouselSize));
    };

    useEffect(() => {
        categoryCarousel();
    }, [winWidth]);

    // console.log(carousel());

    return (
        <>
            <div className='grp_title'>BROWSE BY CATEGORY</div>
            <div className='category-carousel app-container'>
                {/* <div className='category-carousel__items-container'> */}
                {carousel.map((data) => (
                    <div key={data.slug}
                        className='category-carousel__item'>
                        <img src={data.pic} alt='' className='category-carousel__item-img' />
                        <h1
                            className='category-carousel__item-title'
                        >{data.slug} </h1>
                    </div>
                ))}
                {/* </div> */}
            </div>
            <div className='category-carousel__prevnext app-container'>
                <Prev />
                <Next />
            </div>
        </>
    );
}

export default BrowseCategory;