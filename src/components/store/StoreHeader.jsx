import { useState, useEffect } from 'react';

import Search from './Search';
import CartNWish from './CartNWish';
import './StoreHeader.scss';

function StoreHeader() {

    const [tableSize, setTableSize] = useState(false)

    useEffect(() => {


    }, []);

    return (
        <div className='store-header'>
            <CartNWish />
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