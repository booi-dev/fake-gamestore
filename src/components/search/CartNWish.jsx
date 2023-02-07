import { HiShoppingCart } from 'react-icons/hi';
import { useCart } from '../../context/useCart';
import './CartNWish.scss';

function CartNWish() {

    const inCart = useCart();

    return (
        <span className='cart-status'>
            <div className='cart-status__cart'>
                <HiShoppingCart className='cart-icon hiro-icons' />
                {inCart.length}
            </div>
            <div className='cart-status__wishlist'>wishlist</div>
        </span>
    );
}

export default CartNWish;