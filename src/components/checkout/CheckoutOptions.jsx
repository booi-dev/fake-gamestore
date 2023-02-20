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

    const moveToCart = function moveWishToCart() {
        wishDispatch({ type: 'remove', payload: game });
        cartDispatch({ type: 'add', payload: game });
    };

    const moveToWish = function moveCartToWish() {
        cartDispatch({ type: 'remove', payload: game });
        wishDispatch({ type: 'add', payload: game });
    };

    const move = function moveToCartOrWishlist() {
        if (isWishlist) moveToCart();
        else if (isCart) moveToWish();
    };

    const updateWishlist = () => {
        console.log('u w');
        wishDispatch({ type: 'update', payload: game });
    };

    const updateCart = () => {
        console.log('u c');
        cartDispatch({ type: 'update', payload: game });
    };

    const update = useCallback(() => {
        console.log("update");
        if (isWishlist) updateWishlist();
        else if (isCart) updateCart();
    }, [wishlist, cart]);

    return (
        <div className='checkout__options'>
            <button type='button' className={`checkout-swap wishlist ${isWishlist ? 'wishlist' : 'cart'}`}
                onClick={() => move(game)}>

                {
                    isWishlist
                        ? <HiArrowSmDown size={16} className='arrow-icons' />
                        : <HiArrowSmUp size={15} className='arrow-icons' />
                }

            </button>

            <button type='button' className='checkout__delete wishlist'>
                <IoIosRemoveCircle size={20} />
            </button>

            <div className='app-flex-center'>
                <h3 className='fs-xxs mr-sm quantity-label'>Quantity</h3>
                <QuantitySelector game={game} updater={update} />
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