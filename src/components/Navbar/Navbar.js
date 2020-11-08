import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Navbar/Navbar.css';


const WebNavbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='nav-links'>
                    <p>Meals</p>
                </div>
                <div className='nav-links'>
                    <p>Price</p>
                </div>
                <div className='title'>
                    <h1>HomeBody Cooks</h1>
                </div>
                <div className='nav-links'>
                    <p>How-To</p>
                </div>
                <div className='nav-button'>
                    <button>Log In</button>
                </div>
            </div>

            {/* <Navbar className= "navbar" expand="lg">
            <Navbar.Brand href="#home">HomeBody Cooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Meals</Nav.Link>
                    <Nav.Link href="#link">Pricing</Nav.Link>
                    <Nav.Link href="#link">How-To</Nav.Link>
                    <button className = "nav-button">Log In</button>
                </Nav>
            </Navbar.Collapse>
            </Navbar> */}
        
        </>
    )

};

export default WebNavbar;