import { Link, NavLink } from 'react-router-dom';
import { HiMail, HiMenu, HiChevronDown, HiUserCircle } from "react-icons/hi";
import useWinSize from '../hooks/useWinSize';
import siteIconLight from '../assets/site-icon/site-icon-light.png';

import './Header.scss';

function Header() {

    const winWidth = useWinSize();

    return (
        <div className='header'>
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
                            <li > <NavLink to='/'>STORE </NavLink> </li>
                            <li><NavLink to='community'
                                data-testid="header-community-menuBtn"
                            >COMMUNITY </NavLink> </li>
                            <li> <NavLink to='user'>BOMA </NavLink></li>
                            <li> <NavLink to='chat'>CHAT </NavLink></li>
                            <li> <NavLink to='support'
                                data-testid="header-support-menuBtn">SUPPORT </NavLink></li>
                        </ul>
                    </nav>}
                <div className='user'>
                    <div>
                        <HiMail size={13} className='user__notification-icon' />
                    </div>
                    <div className='user_name'>
                        <div>BooiMangang</div>
                        <div className='user_wallet'>$10000</div>
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