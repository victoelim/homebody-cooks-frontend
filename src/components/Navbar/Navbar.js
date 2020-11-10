import React, {useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {toast } from 'react-toastify';
import '../Navbar/Navbar.css';
import LoggedInContext from "../../containers/LoggedInContext"


const WebNavbar = () => {
    const {isOpen, setOpen, isLogin, setIsLogin, isLoggedin, setIsLoggedin, setIsCart} = useContext(LoggedInContext)

    const LoginHandleClick = () => {
        setOpen(true)
        setIsLogin(true)
        setIsCart(false)
    }

    const SignupHandleClick = () => {
        setOpen(true)
        setIsLogin(false)
        setIsCart(false)
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
            {/* <div className='navigation-bar'>
                <div className='title'>
                    <h1>HomeBody Cooks</h1>
                </div>
                <div className='nav-links'>
                    <Link to ="/recipes/show"><a>Meals</a></Link>
                </div>
                <div className='nav-links'>
                    <a href="#">Price</a>
                </div>
                <div className='nav-links'>
                    <a href="#">How-To</a>
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
            </div> */}

            <Navbar expand="lg" className = "navigation-bar" variant = "dark">
            <Navbar className = "title" href="#home"><Link to="/">HomeBody Cooks</Link></Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/recipes/show">Meals</Nav.Link>
                    <Nav.Link href="#link">Plans</Nav.Link>
                    <Nav.Link href="#link">How-To</Nav.Link>
                    {isLoggedin ?
                        <div className='nav-button'>
                            <Link to = "/me">Profile</Link>
                            <Link><button onClick={LogOut}>Log out</button></Link>
                        </div>
                        :
                        <div className='nav-button'>
                            <Link><button onClick={LoginHandleClick}>Log In</button></Link>
                            <Link><button onClick={SignupHandleClick}>Sign Up</button></Link>
                        </div>
                    }
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        </>
    )

};

export default WebNavbar;