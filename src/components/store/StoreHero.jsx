import { useState } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Link as Scroll, scroller } from 'react-scroll';
import Search from '../search/Search';
import bgPictureFull from '../../assets/store-hero-bg/geralt_full.jpg';
import bgPictureStandard from '../../assets/store-hero-bg/geralt_standard.jpg';
import bgPictureMobile from '../../assets/store-hero-bg/geralt_mobile.jpg';


import './StoreHero.scss';

function StoreHero() {

    const [isSearchFocus, setIsSearchFocus] = useState(false);
    /* eslint-disable */

    const onFocusSearch = (state) => {
        if (state === 'focus') setIsSearchFocus(true)
        else if (state === 'blur') setIsSearchFocus(false)
    }


    function scrollToElement(id) {
        scroller.scrollTo("browse-games-title", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }

    const handleDoubleClick = () => {
        scrollToElement('browse-games-title')
    };

    return (
        <div className='store-hero'
            role='button'
        >
            <div className={`store-hero__search ${isSearchFocus && 'focus'}`}
                onFocus={() => onFocusSearch('focus')}
                onBlur={() => onFocusSearch('blur')}
            >
                <Search />
            </div>

            <Scroll to='browse-games-title' spy={true} smooth={true} duration={1000}  >
                <button type='button' className='store-hero__scroll-down-btn'>
                    <BsArrowDownCircle size={25} className='scroll-down-icon' />
                </button>
            </Scroll>
            <div className='store-hero__container'
                onDoubleClick={handleDoubleClick}
            >
                <picture>
                    <source
                        media='(min-width: 1080px)'
                        srcSet={bgPictureFull} />

                    <source
                        media='(min-width: 720px)'
                        srcSet={bgPictureStandard} />

                    <source
                        media='(min-width: 450px)'
                        srcSet={bgPictureMobile} />

                    <img className={`store-hero__bg-img ${isSearchFocus && 'focus'}`} src={bgPictureFull} alt='full background' />
                </picture>
            </div>
        </div>
    );
}

export default StoreHero;