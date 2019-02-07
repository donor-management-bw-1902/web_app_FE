import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = props => {
    const signOut = e => {
        e.preventDefault();
        localStorage.removeItem('AuthToken');
        props.history.push('/');
      }
    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <img src="https://bountiful-website.netlify.com/bcfassets/Bountiful-logo.png" alt="logo"/>
            </div>
            <h2>Donor Management</h2>
            <div className="nav-links">
                <NavLink to="/admin">{props.isAdmin === 1 ? "Admin" : null }</NavLink>
                {props.location.pathname === '/' ? null : <button onClick={signOut}>Sign Out</button>}
            </div>
        </div>
    );
}

export default Navbar;