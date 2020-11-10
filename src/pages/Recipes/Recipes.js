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
    useEffect(() => {
        axios.get('https://homebody-cooks.herokuapp.com/api/v1/recipes/vegetarian')
        .then(function(response){
            updateVegeRecipes(response.data)
            
        })
    }, [])

    const [mixRecipes, updateMixRecipes] = useState([]);
    useEffect(() => {
        axios.get('https://homebody-cooks.herokuapp.com/api/v1/recipes/mix')
        .then(function(response){
            updateMixRecipes(response.data)
        })
    }, [])

    const handleVege = () => setVege(true)
    const handleMix = () => setVege(false)

    return (
        <>
        <Container fluid className = "body">
        {isVege ?
            <Row className="links justify-content-around">
                
                <Col sm ={5} className="link text-center" onClick = { () => handleMix()}>
                    <a>Mix</a>
                </Col>
                <Col sm ={5} className="link-chosen text-center" onClick = { () => handleVege()}>
                    <a>Vegetarian</a>
                </Col>
            </Row>
                :
            <Row className="links justify-content-around">    
                <Col sm ={5} className="link-chosen text-center" onClick = { () => handleMix()}>
                    <a>Mix</a>
                </Col>
                <Col sm ={5} className="link text-center" onClick = { () => handleVege()}>
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
            
                <Col sm = {6}>
                    <Row>
                        <Col sm = {5}>
                            <img className="recipe-img" src={vege.image_url}/>
                        </Col>
                        <Col sm = {7}>
                            <Row className="row-name">
                                <p className="recipe-name">{vege.recipe_name}</p>
                            </Row>
                            <Row className="row-description">
                                <p>{vege.description}</p>
                            </Row>
                            <Row className="row-button">
                                <Link to ={`/recipes/${vege.id}/ingredients`}  className="button-link"><button className="rounded-pill w-100">Choose your ingredient</button></Link>
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
            
                <Col sm = {6}>
                    <Row>
                        <Col sm = {5}>
                            <img className="recipe-img" src={mix.image_url}/>
                        </Col>
                        <Col sm = {7}>
                            <Row className="row-name">
                                <p className="recipe-name">{mix.recipe_name}</p>
                            </Row>
                            <Row className="row-description">
                                <p>{mix.description}</p>
                            </Row>
                            <Row className="row-button">
                                <Link to ={`/recipes/${mix.id}/ingredients`} className="button-link"><button className="rounded-pill w-100">Choose your ingredient</button></Link>
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