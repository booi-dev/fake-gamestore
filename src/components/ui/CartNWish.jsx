import { useNavigate } from 'react-router-dom';
import { BsBookmarkStar } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { useWishCart } from '../../context/useWishCart';
import './CartNWish.scss';

function CartNWish() {
    const navigate = useNavigate();
    const { wishlist, cart } = useWishCart();

    const navigateToCheckout = function navigateToCheckoutOnClick() {
        navigate('/checkout');
    };

    return (
        <span className='cart-status'>
            <button type='button'
                className='cart-status__wishlist'
                onClick={navigateToCheckout}>
                <BsBookmarkStar className='cart-icon' />
                {wishlist?.items.length !== 0
                    &&
                    <span className='wishlist_count'>
                        {wishlist.items.length}</span>
                }
            </button>
            {cart?.items.length !== 0
                && <button type='button'
                    className='cart-status__cart'
                    onClick={navigateToCheckout}>
                    <HiShoppingCart className='cart-icon' />
                    {cart.items.length}
                </button>}
        </span>
    );
}

export default CartNWish;