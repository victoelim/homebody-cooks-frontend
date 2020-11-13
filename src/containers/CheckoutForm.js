import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./CheckoutForm.css"
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkout = ({setOpen}) => {
    const [recipes, updateRecipes] = useState([])
    const [recipe, setRecipe] = useState('')
    useEffect(() => {
        console.log("123")
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/subscription_recipes/me/week`, {
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem('token')
            }
        
        })
        .then(function(response){
            updateRecipes(response.data)
            for (const x of response.data){
                setRecipe(x.recipe)
            }
        })
    },[])
    
    const handleSubmit = event => {
        event.preventDefault();
        axios.delete(`https://homebody-cooks.herokuapp.com/api/v1/subscription_recipes/me/${recipe}/delete`, {
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response.data)
            toast.success("Successfully deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            const updated = recipes.filter(item => item.recipe != recipe)
            updateRecipes(updated)
            

        })
        .catch(error => {
            console.error(error.response) // so that we know what went wrong if the request failed
            toast.warn("Failed to delete, try again 😉", {
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

    const handleCheckout = e => {
        e.preventDefault();
        axios.post(`https://homebody-cooks.herokuapp.com/api/v1/users/me/checkout`, {
            },{
            headers: {
                "Authorization" : "Bearer " +  localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response.data)
            updateRecipes([])
            toast.success("Successfully ordered", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setOpen(false)
            
        })
        .catch(error => {
            console.error(error.response) // so that we know what went wrong if the request failed
            toast.warn("Failed to checkout, try again 😉", {
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

    return (
        <>
        <Modal.Header className="modal-head" closeButton>
            <h1 className="w-100 text-center pl-4 modal-title">Checkout</h1>
        </Modal.Header>
        <Modal.Body className="model-body">
                <Container fluid className="mt-5">
                    {recipes.map((recipe) => {
                        return(
                            <Row className="checkout-row ml-1">
                                <Col className="pl-0" sm={4}>
                                    <img className="w-100 checkout-image" src={recipe.recipe_image_path}></img>
                                </Col>
                                <Col className="name" sm={5}>
                                    <p>{recipe.recipe_name}</p>
                                    <p className= "description-cart">{recipe.recipe_description}</p>
                                </Col>
                                <Col sm={3}>
                                    <form className="delete_recipe">
                                        <FontAwesomeIcon icon={faTimes} onClick={(e) => handleSubmit(e)} className="delete-button"/>
                                    </form>
                                </Col>
                            </Row>
                        )
                    })}
                    <Row className="m-auto">
                        <form className="row-button w-100" onSubmit={(e) => handleCheckout(e)}>
                            <button className="w-100 rounded-pill">Checkout</button>
                        </form>
                    </Row>
                </Container>
        </Modal.Body>
        </>
    )
}

export default Checkout