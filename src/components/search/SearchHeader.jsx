import { Link } from 'react-router-dom';
import Search from './Search';
import CartNWish from '../ui/CartNWish';
import useWinSize from '../../hooks/useWinSize';
import './SearchHeader.scss';

function SearchHeader() {

    const winWidth = useWinSize();

    return (
        <div className='search-header'>
            <div className='search-header__panel'>
                <div className='search-header__panel__tabs-container'>
                    <div className='search-header__panel__tabs'>
                        <Link to='./browse'>
                            <div className='tab'> browse </div>
                        </Link>
                        <div className='tab'> news </div>
                        <div className='tab'> labs</div>
                        {winWidth < 500 && <CartNWish />}

                    </div>
                    <div className='search-header__search'>
                        <Search />
                        {(winWidth > 500) && <CartNWish />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchHeader;