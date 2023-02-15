import { useState, useEffect, useCallback } from 'react';
import SearchHeader from '../search/SearchHeader';
import { useAccount } from '../../context/useAccount';
import { useWishCart } from '../../context/useWishCart';
import QuantitySelector from './QuantitySelector';
import CheckoutConfirm from './CheckoutConfirm';

import './Checkout.scss';

function Checkout() {
    const { wishlist, cart, cartDispatch, wishDispatch } = useWishCart();
    const { credit } = useAccount();

    const [gameTotal, setGameTotal] = useState(0);
    const [showCheckoutConfirm, setShowCheckoutConfirm] = useState(false);
    const [isPurchaseSuccess, setIsPurchaseSuccess] = useState(false);

    const toggleCheckoutConfirm = useCallback(() => {
        setShowCheckoutConfirm(!showCheckoutConfirm);
    }, [showCheckoutConfirm]);

    const setPurchaseSuccessMsg = useCallback(() => {
        setIsPurchaseSuccess(true);
        setTimeout(() => {
            setIsPurchaseSuccess(false);
        }, 1000);
    }, []);

    const moveToCart = function moveWishToCart(game) {
        wishDispatch({ type: 'remove', payload: game });
        cartDispatch({ type: 'add', payload: game });
    };

    const moveToWish = function moveCartToWish(game) {
        cartDispatch({ type: 'remove', payload: game });
        wishDispatch({ type: 'add', payload: game });
    };

    const updateWishlist = useCallback((game) => {
        console.log(game);
        wishDispatch({ type: 'update', payload: game });
    }, [wishlist]);

    const updateCart = useCallback((game) => {
        console.log(game);
        cartDispatch({ type: 'update', payload: game });
    }, [cart]);

    useEffect(() => {
        const gamePriceTotal = cart?.items?.reduce(((sum, game) => sum + (game.price * game.quantity)), 0);
        setGameTotal(gamePriceTotal);
    }, [cart]);

    return (
        <div className='checkout app-container'>
            <SearchHeader />

            <div className='app-flex-space-between'>
                <h1 className='checkout__title p-sm'> YOUR SHOPPPING CART</h1>
                <h1 className='checkout__balance p-sm app-theme-bg br-2'> YOU HAVE ${credit.myCredit}</h1>
            </div>

            <div className='checkout__wishlist'>

                <h2 className='checkout-status p-sm'>{wishlist?.items.length} wishlisted games </h2>

                {wishlist?.items.map((item) => <div key={item.id}
                    className='checkout__wishlist-game checkout-list p-sm'>

                    <div className='app-flex'>
                        <h3>{item?.game}</h3>
                    </div>

                    <div className='app-flex'>
                        <button type='button' className='checkout-cart-swap fs-ss mr-sm'
                            onClick={() => moveToCart(item)}>
                            move to cart</button>
                        <div className='app-flex-center'>
                            <h3 className='fs-xxs mr-sm'>Quantity</h3>
                            <QuantitySelector game={item} updater={updateWishlist} />
                        </div>
                        <h3 className='checkout-price'>{`$ ${item.price * item.quantity}`}</h3>
                    </div>

                </div>)}
            </div>
            <div className='checkout__cart'>

                <h2 className='checkout-status p-sm'>{cart?.items.length} games in cart</h2>

                {cart?.items.length < 1
                    && <h3 className='checkout__empty-cart-status p-sm'> Nothing in Cart! Add some games.</h3>}

                {cart?.items.map((item) => <div key={item.id}
                    className="checkout__cart-game checkout-list p-sm">

                    <div className='app-flex'>
                        <h3>{item?.game}</h3>
                    </div>

                    <div className='app-flex-space-between'>
                        <button type='button' className='checkout-cart-swap fs-ss mr-sm'
                            onClick={() => moveToWish(item)}>
                            move to wishlist</button>
                        <div className='app-flex-center'>
                            <h3 className='fs-xxs mr-sm'>Quantity</h3>
                            <QuantitySelector game={item} updater={updateCart} />
                        </div>
                        <h3 className='checkout-price'> {`$ ${item.price * item.quantity}`} </h3>
                    </div>

                </div>)}
            </div>
            <div className='checkout__pay'>

                <div>
                    <h1 className='fs-xl'> You Have $ {credit.myCredit}</h1>
                </div>

                <div className='checkout__section'>
                    <h1 className='checkout__total fs-xl'> Total ${gameTotal}</h1>
                    {cart?.items.length > 0
                        && <button type='button'
                            className='checkout-btn mt-sm'
                            onClick={toggleCheckoutConfirm}
                        >CHECKOUT</button>}
                </div>

                {showCheckoutConfirm
                    && <CheckoutConfirm
                        toggleCheckoutConfirm={toggleCheckoutConfirm}
                        setPurchaseSuccessMsg={setPurchaseSuccessMsg}
                        gameTotal={gameTotal}
                    />}

                {isPurchaseSuccess
                    && <div type='button'
                        className='checkout__confirm-msg'>
                        Purchase Success
                    </div>}
            </div>
        </div>
    );
}

export default Checkout;