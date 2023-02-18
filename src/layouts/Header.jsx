import { Link, NavLink } from 'react-router-dom';
// import { Link as Scroll } from 'react-scroll';
import { HiMenu } from "react-icons/hi";
import siteIconLight from '../assets/site-icon/site-icon-light.png';
import { useAccount } from '../context/useAccount';
import useWinSize from '../hooks/useWinSize';
import WishCart from '../components/ui/CartNWish';

import './Layout.scss';

function Header() {

    const { games } = useAccount();
    const winWidth = useWinSize();
    /*eslint-disable */
    return (
        <div className='header' id='header-top'>
            <div className='header-container'>
                {winWidth < 740 &&
                    <div className='menu-btn'>
                        <HiMenu className='menu-btn-icon' />
                    </div>
                }
                <div className='site-title' data-testid="header-siteTitle">
                    <img className='site-icon' src={siteIconLight} alt="" />
                    <Link to='/'> BO GAMES</Link>
                </div>
                {winWidth > 740 &&
                    <nav className='navbar'>
                        <ul className='navbar__list'>
                            <li> <NavLink to='/'>STORE </NavLink> </li>
                            <li><NavLink to='mygames'>MY GAMES ({games.myGames.length})</NavLink> </li>
                            <li> <NavLink to='browse'>BROWSE </NavLink> </li>
                            <li> <NavLink to='feature'>FEATURES </NavLink> </li>
                        </ul>
                    </nav>}

                <div>
                    <WishCart />
                </div>
            </div>
        </div>
    );
}

export default Header;