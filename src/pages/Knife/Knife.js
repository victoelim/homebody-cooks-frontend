import React from 'react';
import '../Knife/Knife.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import knifecoverart from '../../images/knifecoverart1.png';

const KnifeArticle = () => {
    return (
        <>
            <Container fluid className = "m-0 p-0">
                <Row className = "m-0 p-0">
                    <img className = "knifecoverart m-0" src={knifecoverart} alt="Knife Cover Art"/>
                </Row>
            </Container>
            <Container>
                <Row className = "d-flex justify-content-center mt-5">
                    <h1>How To Choose The Right Kitchen Knife</h1>
                </Row>
                <Row className = "my-5">
                <p>If the only time you’ve been around more than one knife is when you pass the Cutco booth in the mall and you’ve never walked into an actual knife store to buy a knife, the first thing you’ll probably realize is that it can be a little overwhelming. All that gleaming steel, all those options. 
                    It’ll take about five seconds to see that this ain’t the same as your momma’s run-of-the-mill knife block.</p>
                <p>Guidance, then, is key. That’s why we paired up with “knife master” and owner of the Portland Knife House, Eytan Zias, to find out how to choose a kitchen knife.</p>
                <p>“We don’t preach going out and buying a matching set of knives. There are always knives that you don’t need and knives that you want but that aren’t in there,” Zias says. “You’re spreading your money too thin.”</p>
                <p>Instead, it’s best to focus on buying fewer, higher-quality knives that will accomplish all of the tasks that you will be undertaking while in the kitchen.</p>
                <h3 className = "mr-5 subTitle">Creating a knife set</h3>
                <p className = "w-100">Zias says there are three knives you must have in your arsenal:</p>
                <ul>
                    <li className = "mb-1"><strong>Chef knife</strong> (8-inch) is the standard but will vary according to personal preference. This is the knife you will be doing 90 percent of your work with and is your biggest priority. (Zias adds that this can be substituted with a Santoku knife, the shortest all-purpose knife on the market.)</li>
                    <li className = "mb-1"> <strong>Paring knife</strong> (3 – to 4-inch) is meant for smaller “in the hand” tasks such as peeling or coring.</li>
                    <li className = "mb-1"><strong>Bread knife</strong> (8- to 10-inch) is a serrated knife that is a must for bread. Crusty bread will dull any plain-edge knife no matter the quality so that is where the saw edge of this knife comes in handy.</li>
                </ul>
                <p>If you could add four more (again, depending on what you do in the kitchen):</p>
                <ul>
                    <li className = "mb-1"><strong>Boning or filet knife</strong> (6-inch) is a must for butchering tasks, like tackling a whole chicken or anything that involves removing meat from the bone.</li>
                    <li className = "mb-1"><strong>Carving knife</strong> (10-plus inches) is used for slicing and portioning meats and fish. Length is important here in order to reduce the number of strokes used and get cleaner cuts.</li>
                    <li className = "mb-1"><strong>Vegetable cleaver</strong> (6-inch) is used in a similar way to a chef knife, but also allows for easier scooping of chopped items, such as vegetables.</li>
                    <li className = "mb-1">As mentioned above, the <strong>Santoku</strong> (5-7-inch) is an all-purpose knife that can work as a chef knife replacement.</li>
                </ul>
                <p>Zias says you don’t need to worry yourself with traditional single bevel “sushi” knives unless you are doing your own waterstone sharpening (and have a use for such a knife). Task-specific knives, while they may look amazing, are higher maintenance and often require more skill to use. Stick to the basics.</p>
                <h3 className = "subTitle">Quality Of Steel</h3>
                <p>Zias carries mostly Japanese-made knives in his shop because of their quality. Nobody, he says, competes with Japanese knife-makers in terms of quality. While German steel knives may look like serious business, in the end, they don’t typically hold a candle to their Japanese counterparts.</p>
                <p>A thing to avoid, Zias adds, is picking a knife because of how it looks. It should come down to the quality of the steel, the angles on the blade, and your budget.</p>
                <p>“You have knives that are beautiful and knives that are plain looking. That has nothing to do with the performance,” he says.</p>
                <p>If you are thinking about a carbon steel knife, you must remember that they are generally recommended for people doing their own sharpening. You also have to keep in mind that the benefits of carbon steel (it sharpens easier, it makes a great edge) may end up being outweighed by the downsides: they are not rust- and stain-resistant, and are generally higher maintenance.</p>
                </Row>
                <Row >
                    <Col xs = {6} className="d-flex justify-content-center">
                        <p>Written By: Sam Slaughter</p>
                    </Col>
                    <Col xs ={6} className="d-flex justify-content-center">
                        <p>Written Date: May 14 2019</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default KnifeArticle;