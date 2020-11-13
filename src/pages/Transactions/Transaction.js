import React, {useEffect, useState} from 'react';
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import "./Transaction.css"


const Transaction = () => {
    const [redirect, setRedirect] = useState(false)
    let instance
    let {id} = useParams()
    const [clientToken, setClientToken] = useState("")
    useEffect(() => {
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/transactions/client_token`,{
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem('token'),
            }
        })
        .then(function(response) {
            console.log(response)
            setClientToken(response.data.token)
            console.log(response.data)
           
            
            
            
        })
        .catch(error => {
            console.log(error.response);
        });
    },[])
    console.log(clientToken)

    const purchase = async (e) => {
        e.preventDefault()
        instance.requestPaymentMethod().then((payment_method_nonce)=> {
            let temp = payment_method_nonce.nonce
            console.log(payment_method_nonce)
            axios.post (`https://homebody-cooks.herokuapp.com/api/v1/transactions/${id}/payment`, {
            temp
        },{
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log(response)
            toast.success("Transaction successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setRedirect(true)
        })
        .catch(error => {
            console.error(error.response) 
            toast.warn("Transaction failed, try again 😉", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
        })
        
    }


    
    return (
        <>
        {clientToken.length ?
        <form id="payment-form" onSubmit={purchase.bind(this)}>
            <div>
                <DropIn options={{authorization: clientToken}} onInstance={(e) => (instance = e)}>
                        
                </DropIn>
            </div>
            <div className="payment text-center">
                <input type="submit" />
            </div>
            
            
        </form>
        :
        <div className="d-flex justify-content-center loading-head">
            <Spinner animation="border" role="status" className="loading-div">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </div>
        }
        {redirect ? <Redirect to="/recipes/show"/> : ""}
    </>
    )
}

export default Transaction