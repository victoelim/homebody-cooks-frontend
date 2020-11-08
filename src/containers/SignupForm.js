import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <label for="user_name">Name :</label>
                    <br></br>
                    <input className= "w-100" type="text" id="user_name" onChange = {(e) => setName(e.target.value)} value = {user_name} ></input>
                    <br></br>
                    <br></br>
                    <label for="email">Email :</label>
                    <br></br>
                    <input className= "w-100" type='text' id='email' onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                    <br></br>
                    <br></br>
                    <label for="password">Password :</label>
                    <br></br>
                    <input className= "w-100" type='password' id='password' onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                    <br></br>
                    <br></br>
                    <label for="confirmPassword">Confirm Password :</label>
                    <br></br>
                    <input className= "w-100" type='text' id='confirmPassword' onChange = {(e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
                    <br></br>
                    <br></br>
                    <p>Already a user? <span onClick = {() => setIsLogin(true)}>Log In</span></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick = {(e) => handleSubmit(e)}>
                    Sign Up
                </Button>
            </Modal.Footer>
    
        </>
    )
}





export default SignUpForm;