import React, {useState} from 'react'
import {Switch, Link, Route} from 'react-router-dom';
import './App.css';
import WebNavbar from './components/Navbar/Navbar';
import LoggedInContext from '../src/containers/LoggedInContext';
import Modal from './components/Modal/Modal';
import {toast, ToastContainer} from 'react-toastify';
import Button from 'react-bootstrap/Button' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage/Hompage'

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token'))

  return (
    <>
    <LoggedInContext.Provider value = {{isOpen, setOpen, isLogin, setIsLogin, isLoggedin, setIsLoggedin}}>
    <WebNavbar/>
    {isOpen ? <Modal /> : null}
    <ToastContainer/>
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
    </Switch>
    </LoggedInContext.Provider>
    
    </>
    );
    
}

export default App;
