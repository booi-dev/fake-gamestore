import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div>
                <ul>
                    <NavLink to='/'>STORE</NavLink >
                    <NavLink to='community'>COMMUNITY</NavLink >
                    <NavLink to='user'>BOMA</NavLink >
                    <NavLink to='chat'>CHAT</NavLink >
                    <NavLink to='support'>SUPPORT</NavLink >
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;