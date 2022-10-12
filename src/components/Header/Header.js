import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>

            <div>
                <h1>Quiz Pro</h1>
            </div>
            <div className='links'>
                <Link to='/'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
                <Link to="/FAQ">FAQ</Link>
            </div>


        </nav>
    );
};

export default Header;