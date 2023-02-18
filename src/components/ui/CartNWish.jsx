import { useNavigate } from 'react-router-dom';
import { BsBookmarkStar } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { useWishCart } from '../../context/useWishCart';
import './CartNWish.scss';

export default function WishCart() {
    const navigate = useNavigate();
    const { cart, wishlist } = useWishCart();

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
            <button type='button'
                className='cart-status__cart'
                onClick={navigateToCheckout}>
                <HiShoppingCart className='cart-icon' />
                {cart.items.length > 0 && cart.items.length}
            </button>
        </span>
    );
}