import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Navbar/Navbar.css';


const WebNavbar = () => {
    return (
        <>
            <div className='navigation-bar'>
                <div className='nav-links'>
                    <a href="#">Meals</a>
                </div>
                <div className='nav-links'>
                    <a href="#">Price</a>
                </div>
                <div className='title'>
                    <h1>HomeBody Cooks</h1>
                </div>
                <div className='nav-links'>
                    <a href="#">How-To</a>
                </div>
                <div className='nav-button'>
                    <button>Log In</button>
                </div>
            </div>

        </>
    )

};

export default WebNavbar;