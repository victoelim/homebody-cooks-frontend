import React from 'react';
import '../Homepage/homepage.css';
import Heroimage from '/Users/VictorLim/Desktop/Next Academy/HomeBody_Cooks_React/homebody-cooks/src/images/hero4.png';
import Browserimg from '/Users/VictorLim/Desktop/Next Academy/HomeBody_Cooks_React/homebody-cooks/src/images/Browser1.png';

const Homepage = () => {
    return (
        <>
            <section className = 'hero'>
                <img src = {Heroimage} alt="ingredients"/>
                <div className="herotext">
                    <h2>Don't strees Over Your Meals,</h2>
                    <h2>We'll Take Care of It.</h2>
                    <span>Fresh Ingredients Delivered to Your Doorstep.</span>
                    <button>Join Today</button>
                </div>
            </section>
            <section className = "steps-section">
                < div className = "steps-card-left">
                    <div className = "steps-img">
                        <img src = {Browserimg} alt = "Choosing Meal" />
                    </div>
                    <div className = "steps-texts">
                        <h4>Select Your Desired Meals</h4>
                        <p>Choose from our chef concocted meals.</p>
                        <p>Enjoy delicious local cuisines or international flavors.</p>
                        <p>Whatever your heart and taste-buds desires. </p>
                    </div>
                </div>
                < div className = "steps-card-right">
                    <div className = "steps-texts">
                        <h4>Unpack Your Ingredients</h4>
                        <p>Unpack the fresh ingredients that was</p>
                        <p>delivered right to your doorstep.</p>
                    </div>
                    <div className = "steps-img">
                        <img src = {Browserimg} alt = "Choosing Meal" />
                    </div>
                </div>
                < div className = "steps-card-left">
                    <div className = "steps-img">
                        <img src = {Browserimg} alt = "Choosing Meal" />
                    </div>
                    <div className = "steps-texts">
                        <h4>Cook And Enjoy</h4>
                        <p>Follow our easy recipes and enjoy the joy of cooking.</p>
                        <p>Enjoy delicious local cuisines or international flavors.</p>
                        <p>Whatever your heart and taste-buds desires. </p>
                    </div>
                </div>
                <div className = "cta-card">
                    <div className = "cta-img">
                        <img src = {Browserimg} alt = "Choosing Meal" />
                    </div>
                    <div className = "cta-texts">
                        <h4>Starting from RM 88</h4>
                        <p>No commitment. Cancel at anytime.</p>
                        <button>Join Today</button>
                    </div>
                </div>
            </section>
            <footer className = "footer">
                <a href ="#">Contact Us</a>
                <h6>HomeBody Cooks</h6>
                <a href ="#">FAQs</a>
            </footer>
        </>
    )
}

export default Homepage;
