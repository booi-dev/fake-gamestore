import { HiShoppingCart } from 'react-icons/hi';
import Search from './Search';
import './StoreHeader.scss';

function StoreHeader() {
    return (
        <div className='store-header'>
            <span className='store-header__cart-status'>
                <div className='store-header__cart-status__cart'>
                    <HiShoppingCart className='cart-icon hiro-icons' />
                </div>
                <div className='store-header__cart-status__wishlist'>wishlist</div>
            </span>
            <div className='store-header__panel'>
                <div className='store-header__panel__tabs'>
                    <div> Your Store </div>
                    <div> News & Noteworthy </div>
                    <div> Categories </div>
                    <div> News  </div>
                    <div> Lab</div>
                </div>
                <div className='store-header__search'>
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default StoreHeader;