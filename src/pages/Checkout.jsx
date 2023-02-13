import React from 'react';
import { useAccount } from '../context/useAccount';
import { useWishCart } from '../context/useWishCart';

function Checkout() {
    const { wishlist, cart } = useWishCart();

    const userAccount = useAccount();
    console.log(userAccount?.account);

    return (
        <div className='app-container'>
            <div>
                <h1> you have ${userAccount.account}</h1>
            </div>
            <div>
                <h2>{wishlist?.items.length} wishlisted</h2>
                {wishlist?.items.map((item) => <div key={item.id}>{item.game}</div>)}
            </div>
            <div>
                <h2>{cart?.items.length} in cart</h2>
                {cart?.items.map((item) => <div key={item.id}>{item.game}</div>)}
            </div>
        </div>
    );
}

export default Checkout;