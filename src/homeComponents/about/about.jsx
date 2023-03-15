import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import './about.css';

const notify = () => toast('Here is your toast.');

const About = () => {
    return(
        <section id="about">

            {/* <Toaster
                position="top-left"
                reverseOrder={false}
                toastOptions={{
                    duration:6000
                }}
            /> */}

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
                    This project serves to give a voice, to give space and community to all those who always felt a bit daemonic, those on the fringes just because they are different (for personality, interests, neurodivergency, appearance, skin colour, sexual orientation), 
the misunderstood bringing new prespectives and messages.
                    </p>
                <div className="roadmap">
                    <div className="emoji">
                        <a >  
                            {/* href="roadMap" target="_blank" rel="noreferrer" */}
                            <p>🧭</p>
                        </a>
                    </div> 
                    <div className="road_directions">
                    <h1>Roadmap</h1>
                    <br />
                    <p> A DAO, your votes, 50% of sales devolved to social and humanitarian projects, the possibility to win 3% of the whole deal. </p>
                    </div>
                </div>
                <div className="white_paper">
                <div className="emoji">
                        <a >
                            <p>📓</p>
                        </a>
                    </div>
                    <div className="road_directions">
                    <h1>Whitepaper</h1>
                    <br />
                    <p> We believe NFTs and the crypto world are here to stay and it's time to show what communities can do with decentralization, DAOs, smart contracts, and a common aim.</p>
                    <p>We are just humans, but like Daemons, we can use new perspectives and technologies to lift people up.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About