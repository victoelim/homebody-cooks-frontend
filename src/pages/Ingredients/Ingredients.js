import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

const Ingredients = () => {
    let {id} = useParams()
    const [ingredients, updateIngredients] = useState([]);
    useEffect(() => {
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/recipe_ingredients/${id}`)
        .then(function(response){
            updateIngredients(response.data)
            
        })
    }, [])

    return (
        <Container>
            <Row>
                <Col sm = {4}>
                    <form>
                        {ingredients.map((ingredient) => {
                            return (
                                <>
                                <div>
                                    <input type="checkbox" checked="true" name="ingredients" id="ingredient"/>
                                    <label for="ingredient">{ingredient.ingredient_name}</label>
                                </div>
                                </>
                            )
                        })}
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Ingredients