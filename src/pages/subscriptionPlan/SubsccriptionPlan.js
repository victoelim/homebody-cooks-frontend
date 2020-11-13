import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../subscriptionPlan/SubscriptionPlan.css';
import DeliciousMeals from "../../images/DeliciousMeals.png";
import {Link, Redirect} from 'react-router-dom';
import LoggedInContext from "../../containers/LoggedInContext";

const SubscriptionPlan = () => {
    const {isLoggedin, setOpen, setIsLogin, setIsCart} = useContext(LoggedInContext)
    const [plan, setPlan] = useState([])
    const SignupHandleClick = () => {
        setOpen(true)
        setIsLogin(false)
        setIsCart(false)
    }
    
    useEffect(() => {
        axios.get (`https://homebody-cooks.herokuapp.com/api/v1/subscriptions/`)
    .then(function(response){
        console.log(response.data)
        setPlan(response.data)
    })
    },[])

    return (
        <>
            <Container>
                <Row className = " rowCard d-flex justify-content-center align-items-center mx-0">
                    {plan.map((p) => {
                        return (
                            <Col xs = {12} md = {4} className = "d-flex justify-content-center align-items-center">
                                <Card className = "planCard" >
                                    <Card.Img className = "m-0" variant="top" src= {DeliciousMeals} style={{ height: '10rem', width: 'auto' }} />
                                    <Card.Body>
                                        <Card.Title className = "cardTitle">{p.name}</Card.Title>
                                        <Card.Text>
                                        {p.description}
                                        </Card.Text>
                                        <Card.Text className = "cardText">
                                        RM {p.price}
                                        </Card.Text>
                                        {isLoggedin ? <Link to = {`/${p.id}/transactions`}><Button className = "orderButton rounded-pill w-50">Choose Plan</Button></Link> : <Button className = "orderButton rounded-pill w-50" onClick={() => SignupHandleClick()}>Choose Plan</Button> }
                                    </Card.Body>
                                </Card>
                            </Col>
                    )})}
                </Row>
            </Container>
        
        </>
    )
}

export default SubscriptionPlan;