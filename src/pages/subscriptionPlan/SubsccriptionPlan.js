import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SubscriptionPlan = () => {
    const [plan, setPlan] = useState([])
    
    useEffect(() => {
        axios.get (`https://homebody-cooks.herokuapp.com/api/v1/subscriptions/`)
    .then(function(response){
        console.log(response.data)
        setPlan(response.data)
    })
    },[])

    return (
        <>
            <Container className = "plan-card d-flex justify-content-around align-items-center">
            {plan.map((p) => {
                return (
                <Row>
                    <Col>
                        <h3>{p.name}</h3>
                        <p>{p.price}</p>
                    </Col>
                </Row>
            )})}
            </Container>
        
        </>
    )
}

export default SubscriptionPlan;