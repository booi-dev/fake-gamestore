import { Link, NavLink } from 'react-router-dom';
import { HiMail, HiMenu, HiChevronDown, HiUserCircle } from "react-icons/hi";
import { useAccount } from '../context/useAccount';
import useWinSize from '../hooks/useWinSize';
import siteIconLight from '../assets/site-icon/site-icon-light.png';

import './Layout.scss';

function Header() {

    const { games, credit } = useAccount();
    const winWidth = useWinSize();

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
                            <li> <NavLink to='account'> ACCOUNT </NavLink></li>
                            <li> <NavLink to='support'>SUPPORT </NavLink></li>
                        </ul>
                    </nav>}
                <div className='user'>
                    <div>
                        <HiMail size={13} className='user__notification-icon' />
                    </div>
                    <div className='user_name'>
                        <div>bo_ma</div>
                        <div className='user_wallet'>${credit.myCredit}</div>
                    </div>
                    <button type='button' className='chevron-down-btn'>
                        {winWidth < 500 && <HiChevronDown size={18} className='chevron-down-icon' />}
                    </button>
                    <div>
                        <HiUserCircle className='user__profile-pic' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;