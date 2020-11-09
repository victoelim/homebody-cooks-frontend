import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./SignupForm.css";


const SignUpForm = ({setOpen, setIsLogin, setIsLoggedin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        if (email !== '' && password !== '' && user_name !== '' && (password === confirmPassword)) {
        axios.post (`https://homebody-cooks.herokuapp.com/api/v1/users/`, {
            user_name,
            email,
            password,
        })
        .then(response => {
            localStorage.setItem('token', response.data.auth_token)
            console.log (response.data.auth_token)
            setIsLoggedin(true)
            toast.success("You're signed up", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
          .catch(error => {
            console.error(error.response) // so that we know what went wrong if the request failed
            toast.warn('Seems like you entered some invalid information, please check!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
        }
        else {
            console.log ('error')
        }
        setOpen(false)
        
      };
      const handleClose = () => setOpen(false)
    return (
        <>
            <Modal.Header style = {{
                borderBottomWidth : 0
            }} closeButton>
            </Modal.Header>
            <Modal.Body>
                    <h1 className="text-center">Sign Up</h1>
                    <Container fluid className="mt-5">
                        <form onSubmit = {(e) => handleSubmit(e)}>
                        <Row>
                            <Col xs = {5}>
                                <label for="user_name">Name :</label>
                            </Col>
                            <Col>
                                <input className= "rounded-pill w-100 input bg-light" type="text" id="user_name" onChange = {(e) => setName(e.target.value)} value = {user_name} ></input>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs ={5}>
                                <label for="email">Email :</label>
                            </Col>
                            <Col>
                                <input className= "rounded-pill w-100 input bg-light" type='text' id='email' onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs ={5}>
                                <label for="password">Password :</label>
                            </Col>
                            <Col>
                                <input className= "rounded-pill w-100 input bg-light" type='password' id='password' onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs ={5}>
                                <label for="confirmPassword">Confirm Password :</label>
                            </Col>
                            <Col>
                                <input className= "rounded-pill w-100 input bg-light" type='password' id='confirmPassword' onChange = {(e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center mt-4">
                            <Col sm = {7}>
                                <button type="submit" className="w-100 rounded-pill">
                                Sign Up
                                </button>
                            </Col>
                        </Row>
                        </form>
                    <p className="text-center mt-4">Already a user? <span onClick = {() => setIsLogin(true)}>Log In</span></p>
                    </Container>
            </Modal.Body>
    
        </>
    )
}





export default SignUpForm;