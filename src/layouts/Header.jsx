import { NavLink } from 'react-router-dom';
import { HiMail } from "react-icons/hi";
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
                        menu
                    </div>
                }
                <div className='site-title'>
                    <img className='site-icon' src={siteIconLight} alt="" />
                    BO GAMES
                </div>
                {winWidth > 740 &&
                    <nav className='navbar'>
                        <ul className='navbar__list'>
                            <NavLink to='/'>STORE</NavLink >
                            <NavLink to='community'>COMMUNITY</NavLink >
                            <NavLink to='user'>BOMA</NavLink >
                            <NavLink to='chat'>CHAT</NavLink >
                            <NavLink to='support'>SUPPORT</NavLink >
                        </ul>
                    </nav>}
                <div className='user'>
                    <div>
                        <HiMail size={13} className='user__notification-icon' />
                    </div>
                    <div className='user_name'>
                        <div>BooiMangang</div>
                        <div>$10000</div>
                    </div>
                    <div>
                        <img className='user__profile-pic'
                            src='https://images.unsplash.com/photo-1634689033402-a132c62b310e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='user-propic' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;