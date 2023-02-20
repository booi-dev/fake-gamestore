import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import siteIconLight from '../assets/site-icon/site-icon-light.png';
import { useAccount } from '../context/useAccount';
import BackDrop from '../components/ui/BackDrop';
import WishCart from '../components/ui/CartNWish';

import './Layout.scss';

function Header() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isCloseBtnHover, setIsCloseBtnHover] = useState(false);

    const hideSideBar = function hideSidebarOnClick() {
        setIsSidebarVisible(false);
    };

    const { games } = useAccount();
    /*eslint-disable */
    return (
        <div className='header' id='header-top'>
            <div className='header__container'>
                <div className='header__menu-btn'
                    onClick={() => setIsSidebarVisible(true)}
                    onMouseEnter={() => setIsCloseBtnHover(true)}
                    onMouseLeave={() => setIsCloseBtnHover(false)}
                >
                    {
                        isCloseBtnHover
                            ? <HiArrowSmRight size={20} />
                            : <HiMenu size={20} className='menu-btn-icon' />
                    }

                </div>
                <div className='header__site-title' data-testid="header-siteTitle">
                    <img className='header__site-pic' src={siteIconLight} alt="" />
                    <Link to='/'> BO GAMES</Link>
                </div>
                <nav className={`header__navbar ${isSidebarVisible && 'sidebar'}`}>
                    <ul className='header__navbar__list'>

                        {
                            isSidebarVisible && <div className='header__close-btn'
                                onClick={hideSideBar}
                                onMouseEnter={() => setIsCloseBtnHover(true)}
                                onMouseLeave={() => setIsCloseBtnHover(false)}
                            >
                                {isCloseBtnHover
                                    ? <HiArrowSmLeft size={16} />
                                    : <HiX size={16} />}
                            </div>
                        }

                        <li> <NavLink to='/'>STORE </NavLink> </li>
                        <li><NavLink to='mygames'>MY GAMES ({games.myGames.length})</NavLink> </li>
                        <li> <NavLink to='browse'>BROWSE </NavLink> </li>
                        <li> <NavLink to='feature'>FEATURES </NavLink> </li>
                    </ul>
                </nav>

                <div>
                    <WishCart />
                </div>

                {isSidebarVisible
                    && <BackDrop handler={hideSideBar} />}
            </div>
        </div>
    );
}

export default Header;