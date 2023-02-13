import Search from './Search';
import CartNWish from '../ui/CartNWish';
import useWinSize from '../../hooks/useWinSize';
import './SearchHeader.scss';

function SearchHeader() {

    const winWidth = useWinSize();

    return (
        <div className='search-header'>
            {winWidth > 740 && <CartNWish />}
            <div className='search-header__panel'>
                <div className='search-header__panel__tabs-container'>
                    <div className='search-header__panel__tabs'>
                        <div> News </div>
                        <div> Categories </div>
                        <div> Lab</div>
                    </div>
                    <div className='search-header__search'>
                        <Search />
                    </div>
                </div>
                {winWidth < 740 && <CartNWish />}
            </div>
        </div>
    );
}

export default SearchHeader;