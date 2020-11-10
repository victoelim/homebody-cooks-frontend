import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams, Link } from 'react-router-dom';
import LoggedInContext from "../../containers/LoggedInContext"
import "./Cart.css"

const Cart = () => {
    const {setOpen, setIsCart, isLoggedin, setIsLogin} = useContext(LoggedInContext)

    const CartHandleClick = () => {
        setOpen(true)
        setIsCart(true)
        setIsLogin(false)
        
    }
    return (
            
            <div>
                {isLoggedin ?
                <Link><button onClick={() => CartHandleClick()} class="rounded-circle button-cart" type="submit"><i class="fa fa-shopping-cart w-100" aria-hidden="true"></i></button></Link>
                    :
                <div></div>
                }
            </div>
            
            
            
    )
}

export default Cart 