import PropTypes from 'prop-types';
import { Link as Scroll } from 'react-scroll';
import { RiPlaystationFill, RiXboxFill, RiAppleFill, RiWindowsFill, RiGlobalLine } from 'react-icons/ri';
import { SiIos, SiLinux, SiNintendoswitch } from "react-icons/si";
import { HiChevronDoubleRight } from 'react-icons/hi';
import { DiAndroid } from 'react-icons/di';
import { useWishCart, isInWishCart } from '../../context/useWishCart';

function GameMoreInfo(props) {

    const { game } = props;

    const { wishlist, wishDispatch } = useWishCart();

    const gameDataToAdd = {
        ...game,
        quantity: 1
    };

    const addWishlist = function addToWishlistCart(toAddGame) {
        wishDispatch({ type: "add", payload: toAddGame });
    };

    const removeWishlist = function deleteFromWishlist(toRemoveGame) {
        wishDispatch({ type: 'remove', payload: toRemoveGame });
    };

    const isGameInCart = isInWishCart(game?.id, wishlist?.items);

    const toggleWishlist = function addOrRemoveWishlist() {
        if (isGameInCart) removeWishlist(game);
        else { addWishlist(gameDataToAdd); }
    };

    const platformIcons = {
        playstation: <RiPlaystationFill className='icon' />,
        xbox: <RiXboxFill className='icon' />,
        mac: <RiAppleFill className='icon' />,
        linux: <SiLinux className='icon' />,
        nintendo: <SiNintendoswitch className='icon' />,
        web: <RiGlobalLine className='icon' />,
        pc: <RiWindowsFill className='icon' />,
        android: <DiAndroid className='icon' />,
        ios: <SiIos className='icon' />,
    };

    /* eslint-disable */
    return (
        <div className='game-view__more-info'>
            <div className='flex-center'>
                {game?.parent_platforms
                    ?.map((pf) => <span key={pf?.platform?.id}
                        className='game-view__more-info__platforms'
                    >
                        {platformIcons[pf?.platform?.slug]}
                    </span>)}
                <button type='button'
                    className='website-link'>
                    <a href={game?.website} target="_blank" rel="noopener noreferrer">
                        official site
                        <HiChevronDoubleRight className='icon' />
                    </a>
                </button>
            </div>
            <Scroll to='header-top' spy={true} smooth={true} duration={1000}  >
                <button type='button'
                    className='add-to-wishlist-btn'
                    onClick={() => toggleWishlist()}>
                    {isGameInCart ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
            </Scroll>

        </div>
    );
}

GameMoreInfo.propTypes = {
    game: PropTypes.instanceOf(Object),
};

GameMoreInfo.defaultProps = {
    game: {},
};

export default GameMoreInfo;