import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./LoginForm.css";
import {useGoogleLogin} from 'react-google-login'
import google2 from '../images/google2.png'

const LoginForm = ({isOpen, setOpen, setIsLogin, setIsLoggedin}) => {
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');
    
    const clientId = '920902121768-aqbdapdt5vkqgi3rm648hcrvpp63hcb9.apps.googleusercontent.com'

    const onSuccess = (response) => {
        axios.post (`https://homebody-cooks.herokuapp.com/api/v1/sessions/google_login`, {
            user_email : response.profileObj.email
        })
        .then(response => {
            if (response.data.token){
            console.log(response)
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
            })
            
          } else {
            toast.warn("Invalid email or password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
          } 
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
      console.log(response.profileObj.email);
    }
    
    const onFailure = (response) => {
        console.log(response)
    }  

    const {signIn} = useGoogleLogin ({
        onSuccess,
        onFailure,
        clientId,
        accessType : 'offline'

    })
    const handleSubmit = event => {
        event.preventDefault();
        if (user_email !== '' && user_password !== '') {
        axios.post (`https://homebody-cooks.herokuapp.com/api/v1/sessions/login`, {
            user_email,
            user_password,
        })
            .then(response => {
                if (response.data.token){
                console.log(response)
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
                })
                
              } else {
                toast.warn("Invalid email or password", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
              } 
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
            <Modal.Header style = {{
                borderBottomWidth : 0
            }} closeButton>
            </Modal.Header>
            <Modal.Body>
                    <h1 className="text-center">Log In</h1>
                    <Container fluid className = "mt-5">
                    <form onSubmit = {(e) => handleSubmit(e)}>
                    <Row>
                        <Col xs ={3}>
                            <label for="user_email">Email :</label>
                        </Col>
                        <Col>
                            <input className= "rounded-pill w-100 bg-light input h-100" type='text' id='user_email' onChange = {(e) => setEmail(e.target.value)} value = {user_email}/>
                        </Col>
                    </Row>
                    <br></br>
                    
                    <Row>
                        <Col xs ={3}>
                            <label for="user_password">Password :</label>
                        </Col>
                        <Col>
                            <input className= "rounded-pill w-100 bg-light input h-100" type='password' id='user_password' onChange = {(e) => setPassword(e.target.value)} value = {user_password}/>
                        </Col>
                    </Row>
                    <br></br>

                    <div className="button-div text-center mt-4">
                        
                            <button type="submit" className="w-75 rounded-pill">
                            Log In
                            </button>
                        
                    </div>
                    </form>
                    <div className="button-div text-center mt-4">
                        
                        <button onClick = { () => signIn()} className="w-75 rounded-pill google-button">
                            <img src={google2}></img>
                            <span className = "google">Sign in with Google</span>
                        </button>
                        
                    </div>
                    <p className = "text-center mt-4">Not a user yet? <span onClick = {() => setIsLogin(false)}>Sign Up</span> here.</p>
                    </Container>
            </Modal.Body>
    
        </>
        
    )
}

export default LoginForm