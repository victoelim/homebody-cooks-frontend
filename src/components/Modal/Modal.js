import React, {useContext} from 'react';
import LoggedInContext from "../../containers/LoggedInContext"
import LoginForm from "../../containers/LoginForm"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SignUpForm from '../../containers/SignupForm';
import {ToastContainer} from 'react-toastify';

const Modals = () => {
    const {isOpen, setOpen, isLogin, setIsLogin, setIsLoggedin} = useContext(LoggedInContext)
    const handleClose = () => setOpen(false)
    return (
        <>
        <Modal show={isOpen} onHide={handleClose}>
        {isLogin ? <LoginForm setOpen = {setOpen} setIsLogin = {setIsLogin} setIsLoggedin = {setIsLoggedin}/> : <SignUpForm setOpen = {setOpen} setIsLogin = {setIsLogin} setIsLoggedin = {setIsLoggedin}/> }
        </Modal>
        </>
    );
}

export default Modals;