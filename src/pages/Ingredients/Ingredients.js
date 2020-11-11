import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useParams, Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import LoggedInContext from "../../containers/LoggedInContext"
import './Ingredients.css'

const Ingredients = () => {
    let {id} = useParams()
    const [ingredients, updateIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [recipe, updateRecipe] = useState([])
    useEffect(() => {
        console.log('call useeffect ', id)
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/recipe_ingredients/${id}`)
        .then(function(response){
            updateIngredients(response.data)
            console.log(response.data)
             let temp = []
            for (const x of response.data) {
                temp.push(x.ingredient_id)
              }
            setSelectedIngredients(temp)
            
            
        })
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/recipes/${id}`)
        .then(function(response){
            console.log(response.data)
            updateRecipe(response.data)  
              
        })
    }, [])

    const handleIngredients = (ingredient_id) => {
        if (selectedIngredients.includes(ingredient_id) == false)  {
          setSelectedIngredients([
            ...selectedIngredients,
            ingredient_id
          ])
        } else {
          const updated = selectedIngredients.filter(item => item != ingredient_id)
          setSelectedIngredients(updated)
        }
      }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(selectedIngredients)
        axios.post (`https://homebody-cooks.herokuapp.com/api/v1/subscription_recipes/me/${id}`, {
            selectedIngredients
        }, {
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem('token')
            },
            
            
        })
        .then(response => {
            console.log(response)
            toast.success("Successfully added to cart", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
        .catch(error => {
            console.log(error.response)
        })
        
    }
    
    
    return (
        <Container className="ingredients">
            {recipe.length ?
            <div>
            <Row className="justify-content-center mt-5">
                <Col sm={12} md = {9}>
                    <h1>{recipe[0].recipe_name}</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col sm={12} md = {9}>
                    <p className="description">{recipe[0].description}</p>
                </Col>
            </Row>
            <Row className="justify-content-center row-ingredient mt-4">
                <Col sm = {12} md={4}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {ingredients.map((ingredient) => {
                            return (
                                <>
                                <div className="mb-2">
                                    <input type="checkbox" defaultChecked="true" name="ingredients" id="ingredient" onChange = {() => handleIngredients(ingredient.ingredient_id)} value={ingredient.ingredient_id}/>
                                    <label className="ml-3" for="ingredient">{ingredient.ingredient_name}</label>
                                </div>
                                </>
                            )
                        })}
                        <button type="submit" className="cart-button w-100 rounded-pill mb-5">Add to Cart</button>
                    </form>
                </Col>
                <Col sm={12} md={5} className="pl-0">
                    <img className="w-100 recipe-image rounded-circle" src={recipe[0].image_url}></img>
                </Col>
            </Row>
            </div>
            : 
            <div className="d-flex justify-content-center loading-head">
            <Spinner animation="border" role="status" className="loading-div">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </div>
             }
            
        </Container>
        
    )
}

export default Ingredients