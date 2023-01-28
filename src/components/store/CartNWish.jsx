import { HiShoppingCart } from 'react-icons/hi';
import './CartNWish.scss';

function CartNWish() {
    return (
        <span className='store-header__cart-status'>
            <div className='store-header__cart-status__cart'>
                <HiShoppingCart className='cart-icon hiro-icons' />
            </div>
            <div className='store-header__cart-status__wishlist'>wishlist</div>
        </span>
    );
}

export default CartNWish;