import { HiShoppingCart } from 'react-icons/hi';
import './CartNWish.scss';

function CartNWish() {
    return (
        <span className='cart-status'>
            <div className='cart-status__cart'>
                <HiShoppingCart className='cart-icon hiro-icons' />
            </div>
            <div className='cart-status__wishlist'>wishlist</div>
        </span>
    );
}

export default CartNWish;