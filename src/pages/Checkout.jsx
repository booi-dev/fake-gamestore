import React from 'react';
import { useWishCart } from '../context/useWishCart';

function Checkout() {
    const { wishlist, cart } = useWishCart();

    return (
        <div className='app-container'>
            <div>
                <h1>{wishlist?.items.length} wishlisted</h1>
                {wishlist?.items.map((item) => <div key={item.id}>{item.game}</div>)}
            </div>
            <div>
                <h1>{cart?.items.length} in cart</h1>
                {cart?.items.map((item) => <div key={item.id}>{item.game}</div>)}
            </div>
        </div>
    );
}

export default Checkout;