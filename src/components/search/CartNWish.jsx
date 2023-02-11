import { HiShoppingCart } from 'react-icons/hi';
import { useWishCart } from '../../context/useWishCart';
import './CartNWish.scss';

function CartNWish() {

    const { wishlist, cart } = useWishCart();

    return (
        <span className='cart-status'>
            <div className='cart-status__wishlist'>
                wishlist <span className='wishlist_count'>
                    {wishlist.items.length}</span>
            </div>
            {cart?.items.length !== 0
                && <div
                    className='cart-status__cart'>
                    <HiShoppingCart className='cart-icon hiro-icons' />
                    {cart.items.length}
                </div>}
        </span>
    );
}

export default CartNWish;