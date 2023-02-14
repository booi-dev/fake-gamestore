import { useState, useEffect, useCallback } from 'react';
import SearchHeader from '../search/SearchHeader';
import { useAccount } from '../../context/useAccount';
import { useWishCart } from '../../context/useWishCart';
import CheckoutConfirm from './CheckoutConfirm';

import './Checkout.scss';

function Checkout() {
    const { wishlist, cart } = useWishCart();
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

    useEffect(() => {
        const gamePriceTotal = cart?.items?.reduce(((sum, game) => sum + game.price), 0);
        setGameTotal(gamePriceTotal);
    }, [cart]);

    return (
        <div className='checkout app-container'>
            <SearchHeader />

            <div>
                <h1 className='checkout__title'> YOUR SHOPPPING CART</h1>
            </div>

            <div className='checkout__wishlist '>
                <h2 className='checkout-status'>{wishlist?.items.length} games wishlisted</h2>
                {wishlist?.items.map((item) => <div key={item.id}
                    className='checkout__wishlist-game checkout-list'>
                    <h3>{item.game}</h3>
                    <h3>$ {item.price}</h3>
                </div>)}
            </div>
            <div className='checkout__cart'>
                <h2 className='checkout-status'>{cart?.items.length} games in cart</h2>
                {cart?.items.map((item) => <div key={item.id}
                    className="checkout__cart-game checkout-list">
                    <h3>{item.game}</h3>
                    <h3>$ {item.price}</h3>
                </div>)}
            </div>
            <div className='checkout__pay'>
                <div>
                    <h1 className='fs-xl'> You Have $ {credit.myCredit}</h1>
                </div>
                <div className='checkout__section'>
                    <h1 className='checkout__total fs-xl'> Total ${gameTotal}</h1>
                    <button type='button'
                        className='checkout-btn'
                        onClick={toggleCheckoutConfirm}
                    >CHECKOUT</button>
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