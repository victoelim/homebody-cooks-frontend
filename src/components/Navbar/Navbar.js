import React, {useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {toast } from 'react-toastify';
import '../Navbar/Navbar.css';
import LoggedInContext from "../../containers/LoggedInContext"


const WebNavbar = () => {
    const {isOpen, setOpen, isLogin, setIsLogin, isLoggedin, setIsLoggedin} = useContext(LoggedInContext)

    const LoginHandleClick = () => {
        setOpen(true)
        setIsLogin(true)
    }

    const SignupHandleClick = () => {
        setOpen(true)
        setIsLogin(false)
    }

    const LogOut = () => {
        localStorage.removeItem('token');
        setIsLoggedin(false);
        toast.success("You're logged out", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
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
                {isLoggedin ?
                <div className='nav-button'>
                    <Link><button onClick={LogOut}>Log out</button></Link>
                </div>
                :
                <div className='nav-button'>
                    <Link><button onClick={LoginHandleClick}>Log In</button></Link>
                    <Link><button onClick={SignupHandleClick}>Sign Up</button></Link>
                </div>
                }
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