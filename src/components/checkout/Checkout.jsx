import { useState, useEffect, useCallback } from 'react';
import SearchHeader from '../search/SearchHeader';
import { useAccount } from '../../context/useAccount';
import { useWishCart } from '../../context/useWishCart';
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

    const moveToCart = function name(game) {
        wishDispatch({ type: 'remove', payload: game.id });
        cartDispatch({ type: 'add', payload: game });
    };

    const moveToWish = function name(game) {
        cartDispatch({ type: 'remove', payload: game.id });
        wishDispatch({ type: 'add', payload: game });
    };

    useEffect(() => {
        const gamePriceTotal = cart?.items?.reduce(((sum, game) => sum + game.price), 0);
        setGameTotal(gamePriceTotal);
    }, [cart]);

    return (
        <div className='checkout app-container'>
            <SearchHeader />
            <div>
                <h1 className='checkout__title p-sm'> YOUR SHOPPPING CART</h1>
            </div>
            <div className='checkout__wishlist'>
                <h2 className='checkout-status p-sm'>{wishlist?.items.length} wishlisted games </h2>
                {wishlist?.items.map((item) => <div key={item.id}
                    className='checkout__wishlist-game checkout-list p-sm'>
                    <h3>{item.game}</h3>
                    <div className='app-flex'>
                        <button type='button' className='checkout-cart-swap fs-ss'
                            onClick={() => moveToCart(item)}>
                            move to cart</button>
                        <h3 className='checkout-price'>$ {item.price}</h3>
                    </div>
                </div>)}
            </div>
            <div className='checkout__cart'>
                <h2 className='checkout-status p-sm'>{cart?.items.length} games in cart</h2>
                {cart?.items.length < 1
                    && <h3 className='checkout__empty-cart-status p-sm'> Nothing in Cart! Add some games.</h3>}
                {cart?.items.map((item) => <div key={item.id}
                    className="checkout__cart-game checkout-list p-sm">
                    <h3>{item.game}</h3>
                    <div className='app-flex'>
                        <button type='button' className='checkout-cart-swap fs-ss'
                            onClick={() => moveToWish(item)}>
                            move to wishlist</button>
                        <h3 className='checkout-price'>$ {item.price}</h3>
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
                            className='checkout-btn'
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