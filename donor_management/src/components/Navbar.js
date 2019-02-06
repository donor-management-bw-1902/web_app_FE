import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = props => {
    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <h1>Bountiful</h1>
            </div>
            <h2>Donor Managment</h2>
            <div className="nav-links">
                <NavLink to="/admin">{props.isAdmin === 1 ? "Admin" : null }</NavLink>
                {props.location.pathname === '/' ? null : <button onClick={props.signOut}>Sign Out</button>}
            </div>
        </div>
    );
}

export default Navbar;