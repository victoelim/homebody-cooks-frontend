import React from 'react';
import '../Knife/Knife.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import cookingcoverart from '../../images/cookingcoverart1.png';

const InductionHobArticle = () => {
    return (
        <>
            <Container fluid className = "m-0 p-0">
                <Row className = "m-0 p-0">
                    <img className = "knifecoverart m-0" src={cookingcoverart} alt="Cooking Cover Art"/>
                </Row>
            </Container>
            <Container>
                <Row className = "d-flex justify-content-center mt-5">
                    <h1>5 Things To Know Before You Buy An Induction Hob</h1>
                </Row>
                <Row className = "my-5">
                <p>Induction hobs claim to offer the best of both worlds compared with gas and electric, combining the responsive heating of gas hobs with the easy cleaning of electric hobs.</p>
                <p>They’ve taken domestic and professional kitchens by storm in recent years and induction hobs are an increasing favourite with chefs and home cooks alike.</p>
                <p>We’ve highlighted five characteristics of induction hobs that you should know about before you make your choice.</p>
                <h3>1) Induction hobs heat up quickly</h3>
                <p>The best induction hobs are great for simmering stews slowly, they have responsive touchscreen control and are a breeze to clean. But speed is the main area where induction hobs have cut through the competition from gas and traditional electric ceramic hobs.</p>
                <p>The best induction hob we’ve tested takes just three and a half minutes to boil a big pan of water – as fast as some kettles – compared with the best gas model’s toe-tapping eight minutes. Induction wins hands down.</p>
                <h3>2) You need induction-compatible pans</h3>
                <p>You don’t necessarily need special ‘induction’ pans – but you will need pans that are made of, or contain, iron.</p>
                <p>When you power up an induction hob, metal coils under the hob’s glass surface create a magnetic field. This interacts with the iron in a pan’s base. An electric current is generated that transfers energy into the pan, creating heat.</p>
                <p>Some or all of the pans you already own might work, but it’s best to check. If a fridge magnet sticks firmly to the base, that’s a good sign.</p>
                <p>If not, it’s easy to find induction-ready pans these days, though you’ll need to build the cost of new pans into your budget.</p>
                <h3 className ="mr-5">3) Induction can mean bigger cooking zones</h3>
                <p>Gone are the days of four standard-sized cooking zones on every hob.</p>
                <p>Induction hobs have paved the way to joined-up cooking zones. These can create extended cooking areas variously called flexi, link or bridge zones. They let you cook using larger pots or dishes, which would extend beyond a standard heating zone.</p>
                <h3>4) Induction hobs can affect pacemakers</h3>
                <p>Most common household electrical appliances are not a problem for pacemaker users, but the British Heart Foundation advises that you should keep a distance of at least 60cm from an induction hob while it is on.</p>
                <p>Practically, this means induction hobs are probably best avoided in favour of electric or gas hobs if you have a pacemaker.</p>
                <h3>5) Induction hobs can come with handy extras</h3>
                <p>You can pick up a Best Buy induction hob for less than £250, but if you fancy pushing the boat out, look out for these features:</p>
                <ul>
                    <li><strong>Hob to hood wireless communication</strong> Your cooker hood detects what is being produced from the hob below and adjusts its fan speed accordingly.</li>
                    <li><strong>Integrated extractor</strong> An extractor fan is built into the hob itself, meaning you won’t need a hood.</li>
                    <li><strong>Gas and induction in one</strong> If you can’t say goodbye to gas, some induction hobs also include a gas burner.</li>
                    <li><strong>Induction wok zone</strong> This is where the hob has a curved indentation to accommodate a wok.</li>
                </ul>
                </Row>
                <Row >
                    <Col xs = {6} className="d-flex justify-content-center">
                        <p>Written By: Jane Darling</p>
                    </Col>
                    <Col xs ={6} className="d-flex justify-content-center">
                        <p>Written Date: June 6 2019</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InductionHobArticle;