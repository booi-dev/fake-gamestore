import { useState } from 'react';
import { HiShoppingCart, HiSearchCircle } from 'react-icons/hi';
import './StoreHeader.scss';

function StoreHeader() {

    const [searchVal, setsearchVal] = useState('');

    const handleInput = function getValueFromInputForSearching(e) {
        console.log(e.target.value);
        setsearchVal(e.target.value);
    };

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
                <div className='search'>
                    <input className="search-input" value={searchVal}
                        onChange={handleInput}
                    />
                    <HiSearchCircle className='search-icon hiro-icons' size={24} />
                </div>

            </div>
        </div>
    );
}

export default StoreHeader;