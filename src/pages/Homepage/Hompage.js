import React , {useContext} from 'react';
import '../Homepage/homepage.css';
import Heroimage from '../../images/hero4.png';
import Browserimg from '../../images/Browser1.png';
import Unpack from '../../images/unpack_transparent.png';
import Cook from '../../images/Cook.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Deliver from "../../images/deliver.png";
import LoggedInContext from "../../containers/LoggedInContext";
import {Link, Redirect} from 'react-router-dom';

const Homepage = () => {
    const {setOpen, setIsLogin, setIsCart, isLoggedin} = useContext(LoggedInContext)
    const SignupHandleClick = () => {
        setOpen(true)
        setIsLogin(false)
        setIsCart(false)
    }

    return (
        <>
            <Container fluid className = "p-0">
                <Row className = "m-0">
                    <Col sm = {12} className = "hero p-0">
                        <img src = {Heroimage} alt="ingredients"/>
                        <div className="herotext">
                            <h2>Don't stress Over Your Meals,</h2>
                            <h2>We'll Take Care of It.</h2>
                            <span>Fresh Ingredients Delivered to Your Doorstep.</span>
                            {isLoggedin ? <Link to = "/recipes/show"><button>Order Meals</button></Link> : <button onClick = {SignupHandleClick}>Join Today</button>}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className = "steps-section p-0">
                <Row className = "my-5 mx-0 justify-content-center text-center">
                    <Col sm={12} md = {5} className = "p-0">
                        <img className = "steps-img" src = {Browserimg} alt = "Choosing Meal" />
                    </Col>
                    <Col sm={12} md = {5} className = "p-0">
                        <h4>Select Your Desired Meals</h4>
                        <p>Choose from our chef concocted meals.</p>
                        <p>Enjoy delicious local cuisines or international flavors.</p>
                        <p>Whatever your heart and taste-buds desires. </p>
                    </Col>
                </Row>
                <Row className = "my-5 mx-0 justify-content-center text-center">
                    <Col sm={12} md = {5} className = "p-0">
                        <h4>Unpack Your Ingredients</h4>
                        <p>Unpack the fresh ingredients that was</p>
                        <p>delivered right to your doorstep.</p>
                    </Col>
                    <Col sm={12} md={5} className = "p-0">
                        <img className = "steps-img ml-2" src = {Unpack} alt = "Choosing Meal" />
                    </Col>
                </Row>
                <Row className = "mb-5 mx-0 justify-content-center text-center">
                    <Col sm = {12} md = {5} className = "p-0">
                        <img className = "steps-img" src = {Cook} alt = "Choosing Meal" />
                    </Col>
                    <Col sm = {12} md = {5} className = "p-0">
                        <h4>Cook And Enjoy</h4>
                        <p>Follow our easy recipes and enjoy the joy of cooking.</p>
                        <p>Enjoy delicious local cuisines or international flavors.</p>
                        <p>Whatever your heart and taste-buds desires. </p>
                    </Col>
                </Row>
                <Row className = "justify-content-center mx-0">
                    <Col sm = {12} className = "p-0 d-flex justify-content-center">
                        <img className = "cta-img m-0" src = {Deliver} alt = "Choosing Meal" />
                    </Col>
                    <Col sd = {12} className = "p-0 my-5 d-flex flex-column align-items-center">
                        <h4>Meal Plans Start from RM 88</h4>
                        <p>No commitment. Cancel at anytime.</p>
                        {isLoggedin ? <Link to = "/recipes/show"><button className = "cta-button">Order Meals</button></Link> : <button className = "cta-button" onClick = {SignupHandleClick}>Join Today</button>}
                    </Col>
                </Row>
            </Container>
            <footer className = "footer">
                <h6>HomeBody Cooks</h6>
            </footer>
        </>
    )
}

export default Homepage;
