import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./Recipe.css"

const Recipes = () => {
    const [isVege, setVege] = useState('')
    const [vegeRecipes, updateVegeRecipes] = useState([]);
    const [mixRecipes, updateMixRecipes] = useState([]);
    const [recipes, updateRecipes] = useState([])
    useEffect(() => {
        axios.get('https://homebody-cooks.herokuapp.com/api/v1/recipes/vegetarian')
        .then(function(response){
            updateVegeRecipes(response.data)
            
        })
        axios.get('https://homebody-cooks.herokuapp.com/api/v1/recipes/mix')
        .then(function(response){
            updateMixRecipes(response.data)
        })
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/subscription_recipes/me/today`, {
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem('token')
            }
        
        })
        .then(function(response){
            updateRecipes(response.data.recipe)
            
        })
    }, [])

    const checkCart = (e) => { 
        let result = recipes.includes(e)? true : false
        return result

    }

    const handleVege = () => setVege(true)
    const handleMix = () => setVege(false)

    return (
        <>
        <Container fluid className = "body">
        {isVege ?
            <Row className="links justify-content-around">
                
                <Col xs ={5} md={5} lg={5} className="link text-center" onClick = { () => handleMix()}>
                    <a>Mix</a>
                </Col>
                <Col xs ={5} md={5} lg={5}  className="link-chosen text-center" onClick = { () => handleVege()}>
                    <a>Vegetarian</a>
                </Col>
            </Row>
                :
            <Row className="links justify-content-around">    
                <Col xs ={5} md={5} lg={5} className="link-chosen text-center" onClick = { () => handleMix()}>
                    <a>Mix</a>
                </Col>
                <Col xs ={5} md={5} lg={5} className="link text-center" onClick = { () => handleVege()}>
                    <a>Vegetarian</a>
                </Col>
                
            </Row>
        }
        </Container>
        {isVege ?
        <Container fluid className = "mt-5">
            <Row className="row">
            {vegeRecipes.map((vege) => {
                return (
            
                <Col sm = {12} md={12} lg={6}>
                    <Row className="mb-5">
                        <Col lg = {6} md={12} sm={12}  >
                            <img className="recipe-img" src={vege.image_url}/>
                        </Col>
                        <Col sm = {12} md ={12} lg={6} className="pl-4 recipe-row">
                            <Row className="row-name">
                                <p className="recipe-name">{vege.recipe_name}</p>
                            </Row>
                            <Row className="row-description">
                                <p>{vege.description}</p>
                            </Row>
                            <Row className="row-button">

                                <Link to={`/recipes/${vege.id}/ingredients`}  className="button-link"><button className="rounded-pill w-100 pt-2 pb-2 pl-2 pr-2">Choose ingredient</button></Link>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            )
            })
            }
            </Row>
        </Container>
        :
        <Container fluid className = "mt-5">
            <Row className="row">
            {mixRecipes.map((mix) => {
                return (
            
                <Col sm = {12} md={12} lg={6}>
                    <Row className="mb-5">
                        <Col sm = {12} md={12} lg={6}>
                            <img className="recipe-img" src={mix.image_url}/>
                        </Col>
                        <Col sm = {12} md={12} lg={6} className="pl-4">
                            <Row className="row-name">
                                <p className="recipe-name">{mix.recipe_name}</p>
                            </Row>
                            <Row className="row-description">
                                <p>{mix.description}</p>
                            </Row>
                            <Row className="row-button">
                                <Link to ={`/recipes/${mix.id}/ingredients`} className="button-link"><button className="rounded-pill w-100">Choose ingredient</button></Link>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            )
            })
            }
            </Row>
        </Container>
        }
        </>
    )
}

export default Recipes