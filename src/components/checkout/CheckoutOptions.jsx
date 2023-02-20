import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';
import { IoIosRemoveCircle } from 'react-icons/io';
import { useWishCart } from '../../context/useWishCart';
import QuantitySelector from './QuantitySelector';
import './CheckoutOptions.scss';

function CheckoutOptions(props) {

    const { isWishlist, isCart, game } = props;

    const { wishlist, cart, cartDispatch, wishDispatch } = useWishCart();

    const moveToCart = function moveWishToCart(toMoveGame) {
        wishDispatch({ type: 'remove', payload: toMoveGame });
        cartDispatch({ type: 'add', payload: toMoveGame });
    };

    const moveToWish = function moveCartToWish(toMoveGame) {
        cartDispatch({ type: 'remove', payload: toMoveGame });
        wishDispatch({ type: 'add', payload: toMoveGame });
    };

    const updateWishlist = (updatedGame) => {
        wishDispatch({ type: 'update', payload: updatedGame });
    };

    const updateCart = (updatedGame) => {
        cartDispatch({ type: 'update', payload: updatedGame });
    };

    const deleteWishlist = function deleteGameFromWishlist(toDeleteGame) {
        wishDispatch({ type: 'remove', payload: toDeleteGame });
    };

    const deleteCart = function deleteGameFromCart(toDeleteGame) {
        cartDispatch({ type: 'remove', payload: toDeleteGame });
    };

    const moveGame = function moveToCartOrWishlist(toMoveGame) {
        if (isWishlist) moveToCart(toMoveGame);
        else if (isCart) moveToWish(toMoveGame);
    };

    const updateGame = useCallback((updatedGame) => {
        // console.log("update");
        if (isWishlist) updateWishlist(updatedGame);
        else if (isCart) updateCart(updatedGame);
    }, [wishlist, cart]);

    const deleteGame = function deleteGameFromCartOrWishlist(toDeleteGame) {
        if (isWishlist) deleteWishlist(toDeleteGame);
        else if (isCart) deleteCart(toDeleteGame);
    };

    return (
        <div className='checkout__options'>
            <button type='button' className={`checkout-swap wishlist ${isWishlist ? 'wishlist' : 'cart'}`}
                onClick={() => moveGame(game)}>
                {isWishlist
                    ? <HiArrowSmDown size={16} className='arrow-icons' />
                    : <HiArrowSmUp size={15} className='arrow-icons' />
                }
            </button>

            <button type='button' className='checkout__delete wishlist'
                onClick={() => deleteGame(game)}>
                <IoIosRemoveCircle size={20} />
            </button>

            <div className='app-flex-center'>
                <h3 className='fs-xxs mr-sm quantity-label'>Quantity</h3>
                <QuantitySelector game={game} updater={updateGame} />
            </div>
            <h3 className='checkout-price'>{`$ ${game.price * game.quantity}`}</h3>

        </div>
    );
}

CheckoutOptions.propTypes = {
    isWishlist: PropTypes.bool,
    isCart: PropTypes.bool,
    game: PropTypes.instanceOf(Object).isRequired,
};

CheckoutOptions.defaultProps = {
    isWishlist: false,
    isCart: false,
};

export default CheckoutOptions;