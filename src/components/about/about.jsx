import React from "react";
import './about.css';

const About = () => {
    return(
        <section id="about">
            <div className="description_container">
                <div className="why">
                    <h1>Why 66K6?</h1>
                    <p>The scapegoats are born to show the futility of demonizing each other,
                        be it for reason of ideologies, beliefs, race, sexuality or any other 
                        superficial difference.
                    </p>
                    <p>At the end we all are the same, needing of comprehension and love to thrive,
                        hiding ourselves behind a thick, fuzzy, skin.
                    </p>
                </div>
                <div className="roadmap">
                    <h1>Our Roadmap</h1>
                    <p>It' very simple.</p>
                    <p>Every NFT doubles as a vote in the SickDao.</p>
                    <p>You choose collectively which project to support from the treasury.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About