import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams, Link } from 'react-router-dom';
import LoggedInContext from "../../containers/LoggedInContext"

const Cart = () => {
    const {setOpen, setIsCart} = useContext(LoggedInContext)

    const CartHandleClick = () => {
        setOpen(true)
        setIsCart(true)
    }
    return (
        <form>
            <button class="rounded-circle w-100" type="submit"><i class="fa fa-shopping-cart w-100" aria-hidden="true"></i></button>
        </form>
    )
}

export default Cart 