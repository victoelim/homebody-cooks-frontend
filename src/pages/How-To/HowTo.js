import React from 'react';
import '../How-To/HowTo.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Knife from '../../images/knife_thumbnail.png';
import induction from '../../images/induction.png';
import {Link, Redirect} from 'react-router-dom';

const HowTo = () => {
    return (
        <>
            <Container>
                <Row className = "mt-5 rowbottom">
                    <Col xs = {12} md = {5} className = "mb-3">
                    <Link className="Link" to = "/choosingknife"><div>
                            <img className = "thumbnail" src = {Knife} alt = "Knife"/>
                        </div></Link>
                    </Col>
                    <Col xs = {12} md = {7} className = "mb-3">
                        <Link className="Link" to = "/choosingknife">
                            <div>
                                <h2 className = "articleTitle">How To Choose Your First Kitchen Knife</h2>
                                <p className = "Linkp">If the only time you’ve been around more than one knife is when you pass the Cutco booth in the mall and you’ve never walked into an actual knife store to buy a knife, the first thing you’ll probably realize is that it can be a little overwhelming. All that gleaming steel, all those...</p>
                            </div>
                        </Link>
                        
                    </Col>
                </Row>
                <Row className = "mt-5 rowbottom">
                    <Col xs = {12} md = {5} className = "mb-3">
                    <Link className = "Link" to ="/inductionhob"><div>
                            <img className = "thumbnail" src = {induction} alt = "Induction Hob"/>
                        </div></Link>
                    </Col>
                    <Col xs = {12} md = {7} className = "mb-3">
                        <Link className = "Link" to ="/inductionhob">
                            <div>
                                <h2 className = "articleTitle">Things To Consider When Cooking With An Induction Hob</h2>
                                <p className = "Linkp">Induction is the new buzz word in the hobs marketplace - but what does it mean, and are induction hobs really any better than electric or gas?</p>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default HowTo;