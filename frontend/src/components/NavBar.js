import React from 'react';
import '../components_css/NavBar.css'; // Import CSS file for styling
import logo from '../images/logo.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to ='/'>
                    <img src={logo} alt="Pollution Control Logo" className="logo" /> {/* Add your logo here */}
                </Link>
            </div>
            <div className="navbar-links">
                <Button label="Login" onClick={() => window.location.href='/login'} />
                <Button label="Sign Up" onClick={() => window.location.href='/signup'} />
            </div>
        </nav>
    );
};

export default NavBar;
