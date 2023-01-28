import Search from './Search';
import CartNWish from './CartNWish';
import useWinSize from '../../hooks/useWinSize';
import './StoreHeader.scss';

function StoreHeader() {

    const winWidth = useWinSize();
    console.log(winWidth);

    return (
        <div className='store-header'>
            {winWidth > 740 && <CartNWish />}
            <div className='store-header__panel'>
                <div className='store-header__panel__tabs'>
                    <div> News </div>
                    <div> Categories </div>
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