import { useState, useEffect, useCallback } from 'react';
import { BsFillBookmarkStarFill, BsCartFill } from 'react-icons/bs';
import { useAccount } from '../../context/useAccount';
import { useWishCart } from '../../context/useWishCart';
import CheckoutOptions from './CheckoutOptions';
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
        const gamePriceTotal = cart?.items?.reduce(((sum, game) => sum + (game.price * game.quantity)), 0);
        setGameTotal(gamePriceTotal);
    }, [cart]);

    return (
        <div className='checkout app-container'>

            <div className='app-flex-space-between'>
                <h1 className='checkout__title p-sm'> YOUR SHOPPPING CART</h1>
            </div>

            <div className='checkout__wishlist'>

                <div className='checkout-status wishlist p-sm'>
                    <BsFillBookmarkStarFill size={18} />
                    <h2> {wishlist?.items.length} wishlist </h2>
                </div>

                {wishlist?.items.map((game) => <div key={game.id}
                    className='checkout__wishlist-game p-sm'>
                    <div className='app-flex'>
                        <h3 >{game?.name}</h3>
                    </div>

                    <CheckoutOptions isWishlist game={game} />

                </div>)}

            </div>
            <div className='checkout__cart'>

                <div className='checkout-status cart p-sm' >
                    <BsCartFill size={18} />
                    <h2 >{cart?.items.length} games in cart</h2>
                </div>

                {cart?.items.length < 1
                    && <h3 className='checkout__empty-cart-status p-sm'> Nothing in Cart! Add some games.</h3>}

                {cart?.items.map((game) => <div key={game.id}
                    className="checkout__cart-game p-sm">

                    <div className='app-flex'>
                        <h3>{game?.name}</h3>
                    </div>

                    <CheckoutOptions isCart game={game} />

                </div>)}

            </div>
            <div className='checkout__pay'>
                <h1 className='checkout__balance'> YOU HAVE ${credit.myCredit}</h1>
                <h1 className='checkout__total '> TOTAL ${gameTotal}</h1>
            </div>

            <div className='checkout__section'>

                {cart?.items.length > 0
                    && (<div>

                        <button type='button'
                            className='checkout-btn mt-sm'
                            onClick={toggleCheckoutConfirm}
                        >CHECKOUT</button>
                    </div>)
                }
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
    );
}

export default Checkout;