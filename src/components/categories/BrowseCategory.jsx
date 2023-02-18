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
        { pic: categorMultiplayer, slug: 'multi' },
        { pic: categorPuzzle, slug: 'puzzle' },
        { pic: categorRacing, slug: 'racing' },
        { pic: categoryRogueLike, slug: 'rogue-like' },
        { pic: categoryRpg, slug: 'rpg' },
        { pic: categorySciFi, slug: 'sci-fi' },
        { pic: categorySports, slug: 'sports' },
        { pic: categoryStoryRich, slug: 'story' },
        { pic: categoryStrategy, slug: 'strategy' },
        { pic: categoryCityBuilding, slug: 'building' },
        { pic: categorySurvival, slug: 'survival' },
    ];

    const [carousel, setCarousel] = useState([]);
    const [carouselStart, setCarouselStart] = useState(0);

    const winWidth = useWinSize();

    const categoryCarousel = function createCategoryCarousel() {
        const carouselEnd = winWidth < 500
            ? carouselStart + 2
            : carouselStart + 4;
        // console.log(carouselStart, carouselEnd);
        setCarousel(() => categoryPictures.slice(carouselStart, carouselEnd));
    };

    const carouseNextItem = useCallback(() => {
        const carouselLength = categoryPictures.length;
        if (carouselStart === carouselLength - 4 || carouselStart === carouselLength - 2) setCarouselStart(0);
        else { setCarouselStart(carouselStart + 1); }
    }, [carouselStart]);

    const carousePrevItem = useCallback(() => {
        const carouselLength = categoryPictures.length;
        if (carouselStart === 0 && winWidth < 500) setCarouselStart(carouselLength - 2);
        else if (carouselStart === 0) setCarouselStart(carouselLength - 4);
        else { setCarouselStart(carouselStart - 1); }
    }, [carouselStart]);

    useEffect(() => {
        categoryCarousel();
    }, [carouselStart, winWidth]);


    return (
        <>
            <div className='category-carousel'>
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