import { PropTypes } from "prop-types";
import StoreHeader from './StoreHeader';
import bgPictureFullHD from '../../assets/full-bg/girl-pubg1920x1080.jpg';
import bgPictureHD from '../../assets/full-bg/girl-pubg1440x1080.jpg';
import bgPictureMobile from '../../assets/full-bg/girl-pubg768x1152.jpg';
import './StoreHero.scss';

function StoreHero(props) {
    const { getSearchQuery } = props;
    return (
        <div className='store-hero'>
            <StoreHeader
                getSearchQuery={getSearchQuery}
            />
            <div className='store-hero__container'>
                <picture>
                    <source
                        media='(min-width: 1080px)'
                        srcSet={bgPictureFullHD} />

                    <source
                        media='(min-width: 720px)'
                        srcSet={bgPictureHD} />

                    <source
                        media='(min-width: 450px)'
                        srcSet={bgPictureMobile} />

                    <img className='store-hero__bg-img' src={bgPictureFullHD} alt='full background' />

                </picture>
            </div>
        </div>
    );
}

StoreHero.propTypes = {
    getSearchQuery: PropTypes.func.isRequired,
};

export default StoreHero;