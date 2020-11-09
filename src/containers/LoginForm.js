import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./LoginForm.css";

const LoginForm = ({isOpen, setOpen, setIsLogin, setIsLoggedin}) => {
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        if (user_email !== '' && user_password !== '') {
        axios.post (`https://homebody-cooks.herokuapp.com/api/v1/sessions/login`, {
            user_email,
            user_password,
        })
        .then(response => {
            localStorage.setItem('token', response.data.token)
            console.log (response.data.token)
            setIsLoggedin(true);
            toast.success("You're logged in", {
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
            toast.warn("You're not in our database, sign up to use Homebody Cooks 😉", {
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
          toast.warn('Seems like you entered some invalid information, please check!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        setOpen(false)
        
      };

      const handleClose = () => setOpen(false)

        return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <label for="user_email">Email :</label>
                    <br></br>
                    <input className= "w-100" type='text' id='user_email' onChange = {(e) => setEmail(e.target.value)} value = {user_email}/>
                    <br></br>
                    <br></br>
                    <label for="user_password">Password :</label>
                    <br></br>
                    <input className= "w-100" type='password' id='user_password' onChange = {(e) => setPassword(e.target.value)} value = {user_password}/>
                    <br></br>
                    <br></br>
                    <p>Not a user yet? <span onClick = {() => setIsLogin(false)}>Sign Up</span> here.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick = {(e) => handleSubmit(e)}>
                    Log In
                </Button>
            </Modal.Footer>
    
        </>
        
    )
}

export default LoginForm