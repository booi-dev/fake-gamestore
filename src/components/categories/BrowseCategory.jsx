import { useEffect, useState, useCallback } from 'react';
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
        { pic: categorHorror, slug: 'horror' },
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
    const [carouselStart, setCarouselStart] = useState(0);

    const winWidth = useWinSize();

    const categoryCarousel = function createCategoryCarousel() {
        const carouselSize = winWidth < 500 ? carouselStart + 2 : carouselStart + 4;
        setCarousel(() => categoryPictures.slice(carouselStart, carouselSize));
    };

    const carouseNextItem = useCallback(() => {
        const carouselLength = categoryPictures.length;
        console.log(carouselStart, carouselLength);
        if (carouselStart === carouselLength - 4 || carouselStart === carouselLength - 2) setCarouselStart(0);
        else { setCarouselStart(carouselStart + 1); }
    }, [carouselStart]);

    const carousePrevItem = useCallback(() => {
        const carouselLength = categoryPictures.length;
        console.log(carouselStart, carouselLength);
        if (carouselStart === 0) setCarouselStart(carouselLength - 4);
        if (carouselStart === 0 && winWidth < 500) setCarouselStart(carouselLength - 2);
        else { setCarouselStart(carouselStart - 1); }
    }, [carouselStart]);

    useEffect(() => {
        categoryCarousel();
    }, [carouselStart, winWidth]);

    return (
        <>
            <div className='grp_title'>BROWSE BY CATEGORY</div>
            <div className='category-carousel app-container'>
                {carousel.map((data) => (
                    <div key={data.slug}
                        className='category-carousel__item'>
                        <img src={data.pic} alt='' className='category-carousel__item-img' />
                        <h1
                            className='category-carousel__item-title'
                        >{data.slug.toUpperCase()} </h1>
                    </div>
                ))}
            </div>
            <div className='category-carousel__prevnext app-container'>
                <Prev prevHandler={carousePrevItem} />
                <Next nextHandler={carouseNextItem} />
            </div>
        </>
    );
}

export default BrowseCategory;