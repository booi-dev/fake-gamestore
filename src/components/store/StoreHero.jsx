import SearchHeader from '../search/SearchHeader';
// import bgPictureFullHD from '../../assets/full-bg/girl-pubg1920x1080.jpg';
// import bgPictureHD from '../../assets/full-bg/girl-pubg1440x1080.jpg';
// import bgPictureMobile from '../../assets/full-bg/girl-pubg768x1152.jpg';
import bgPictureFull from '../../assets/store-hero-bg/tifa_full.jpg';
import bgPictureStandard from '../../assets/store-hero-bg/tifa_standard.jpg';
import bgPictureMobile from '../../assets/store-hero-bg/tifa_mobile.jpg';
import './StoreHero.scss';

function StoreHero() {

    return (
        <div className='store-hero'>
            <SearchHeader />
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
        </div>
    );
}

export default StoreHero;