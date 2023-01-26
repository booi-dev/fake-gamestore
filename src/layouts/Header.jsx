import { NavLink } from 'react-router-dom';
import { HiMail } from "react-icons/hi";
// import siteIconDark from '../assets/site-icon/site-icon-dark.png';
import siteIconLight from '../assets/site-icon/site-icon-light.png';

import './Header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='site-title'>
                    <img className='site-icon' src={siteIconLight} alt="" />
                    BO GAMES
                </div>
                <nav className='navbar'>
                    <ul className='navbar__list'>
                        <NavLink to='/'>STORE</NavLink >
                        <NavLink to='community'>COMMUNITY</NavLink >
                        <NavLink to='user'>BOMA</NavLink >
                        <NavLink to='chat'>CHAT</NavLink >
                        <NavLink to='support'>SUPPORT</NavLink >
                    </ul>
                </nav>
                <div className='profile'>
                    <div>
                        <HiMail size={25} />
                    </div>
                    <div>
                        <div>BooiMangang</div>
                        <div>100</div>
                    </div>
                    <div>Image</div>
                </div>
            </div>
        </div>

    );
}

export default Header;