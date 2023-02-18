import { BsArrowDownCircle } from 'react-icons/bs';
import { Link as Scroll } from 'react-scroll';
import Search from '../search/Search';
import bgPictureFull from '../../assets/store-hero-bg/geralt_full.jpg';
import bgPictureStandard from '../../assets/store-hero-bg/geralt_standard.jpg';
import bgPictureMobile from '../../assets/store-hero-bg/geralt_mobile.jpg';

import './StoreHero.scss';

function StoreHero() {

    return (
        <div className='store-hero'>
            <div className='store-hero__search'>
                <Search />
            </div>
            <div className='store-hero__container'>
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

                    <img className='store-hero__bg-img' src={bgPictureFull} alt='full background' />
                </picture>
            </div>
            <Scroll to='browse-games-title' spy={true} smooth={true} duration={1000}  >
                <button type='button' className='store-hero__scroll-down-btn'>
                    <BsArrowDownCircle size={25} className='scroll-down-icon' />
                </button>
            </Scroll>
        </div>
    );
}

export default StoreHero;