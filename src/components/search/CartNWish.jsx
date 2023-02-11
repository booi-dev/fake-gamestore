import { HiShoppingCart } from 'react-icons/hi';
import { useCart } from '../../context/useCart';
import { useWishCart } from '../../context/useWishCart';
import './CartNWish.scss';

function CartNWish() {

    const inCart = useCart();
    const { state } = useWishCart();

    return (
        <span className='cart-status'>
            {state?.wishlist.length !== 0
                && <div className='cart-status__wishlist'>
                    wishlist <span className='wishlist_count'>{state.wishlist.length}</span>
                </div>
            }
            {inCart?.length !== 0
                && <div
                    className='cart-status__cart'>
                    <HiShoppingCart className='cart-icon hiro-icons' />
                    {inCart.length}
                </div>}
        </span>
    );
}

export default CartNWish;