import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../changePlan/changePlan.css';
import DeliciousMeals from "../../images/DeliciousMeals.png";
import {Link, Redirect} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ChangePlan = () => {
    const [plan, setPlan] = useState([])
    const [subscribtion, setSubscription] = useState()
    
    useEffect(() => {
        axios.get (`https://homebody-cooks.herokuapp.com/api/v1/subscriptions/`)
    .then(function(response){
        console.log(response.data)
        setPlan(response.data)
    })
    
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/users/me`, {
            headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then (function(response){
            console.log(response.data.subscription_id);
            setSubscription(response.data.subscription_id);
            console.log(subscribtion)
            
        })
    },[])

    return (
        <>
            <Container>
            { subscribtion ?
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
                                        {console.log(subscribtion)}
                                        <Link to = {`/${p.id}/transactions`}>{subscribtion !== "undefined" ? <Button className = "orderButton rounded-pill w-50">Update Plan</Button> : <Button className = "orderButton rounded-pill w-50">Choose Plan</Button>}</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                    )})}
                </Row>
                : 
            <div className="d-flex justify-content-center loading-head">
            <Spinner animation="border" role="status" className="loading-div">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </div>
             }
            </Container>
        
        </>
    )
}

export default ChangePlan;