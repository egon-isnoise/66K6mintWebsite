import React from "react";
// import GIF from '../../assets/why.gif';
// import GIF2 from '../../assets/roadmap.gif';
// import GIF3 from '../../assets/justdoit.gif';
import './about.css';

const About = () => {
    return(
        <section id="about">
            <div className="description_container">
                    <div className="title">
                        <h2>🪬</h2>
                        <h1> WE ARE THE DAEMONS </h1>
                        
                    </div>
                    <br />
                    <br />
                    <p>
                        In Plato's Symposium, the priestess Diotima teaches Socrates that love is not a deity, but rather a "great daemon". 
                    </p>
                    <p>
                        She goes on to explain that "everything daemonic is between divine and mortal", and she describes daemons as "interpreting and transporting human things to the gods and divine things to men..."
                    </p>
                    <p>
                        No wonder today to be demonized means to be hunted down, shun for having shown a free personality, for thinking too differently, for having raised one's head in the face of the established order. 
                    </p>
                    <p>
                    This project serves to give a voice, to give space and community to all those who always felt a bit daemonic, those excluded just because they are different (for appearance, skin colour, personality, sexual orientation, neurodivergency), 
the misunderstood bringing new prespectives and messages.
                    </p>
                <div className="roadmap">
                    <div className="emoji">
                        <a href="roadMap" target="_blank" rel="noreferrer">
                            <p>🧭</p>
                        </a>
                    </div> 
                    <div className="road_directions">
                    <h1>Roadmap</h1>
                    <p> Every NFT doubles as a vote in the SickDao. You choose collectively which projects to support from the treasury. </p>
                    </div>
                </div>
                <div className="white_paper">
                <div className="emoji">
                        <a href="whitePaper" target="_blank" rel="noreferrer">
                            <p>📓</p>
                        </a>
                    </div>
                    <div className="road_directions">
                    <h1>Whitepaper</h1>
                    <p> Every NFT doubles as a vote in the SickDao. You choose collectively which projects to support from the treasury. </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About