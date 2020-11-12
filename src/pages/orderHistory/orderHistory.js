import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useParams, Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import LoggedInContext from "../../containers/LoggedInContext"
import "./orderHistory.css"

const OrderHistory = () => {
    const [previousOrders , setPreviousOrders] = useState([])
    useEffect(() => {
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/users/me/order_history`,{
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem('token')
            }
        })
        .then(function(response){
            setPreviousOrders(response.data)
            console.log(response.data)
    
            
            
        })
    })
    return (
        <>
        <Container>
            <h1>Order History</h1>
            {previousOrders.map((previousOrder) => {
                return (
                    <Row className = "order-history mt-4 pt-2 pb-2">
                        <Col sm={12} md={12} lg={3}>
                            <img className="w-100 order-image" src={previousOrder.recipe_image_path}></img>
                        </Col>
                        <Col sm ={12} md={12} lg={9}>
                            <Row>
                                <h1 className="m-5">{previousOrder.subscription_recipe}</h1>
                            </Row>
                            <Row>
                                <p className="order-time ml-5">{previousOrder.created_at}</p>
                            </Row>
                        </Col>
                    </Row>
                )
            })}
            
        </Container>
        </>
    )
}

export default OrderHistory