import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='site-title'>
                    BOMA GAMES
                </div>
                <nav className='navbar'>
                    <ul>
                        <NavLink to='/'>STORE</NavLink >
                        <NavLink to='community'>COMMUNITY</NavLink >
                        <NavLink to='user'>BOMA</NavLink >
                        <NavLink to='chat'>CHAT</NavLink >
                        <NavLink to='support'>SUPPORT</NavLink >
                    </ul>
                </nav>
                <div className='profile'>
                    <div>notification</div>
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