import React from "react";
import {FaMap} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io';
import './about.css';

const About = () => {
    return(
        <section id="about">
            <div className="description_container">
                <div className="why">
                    <h1>Why AfterImage?</h1>
                    <br />
                    <p>We are born to show the futility of demonizing each other,
                        be it for reason of ideologies, beliefs, race, sexuality or other 
                        superficial differences.
                    </p>
                    <br />
                    <p>Deep down we all are the same,
                        hiding behind a thick, fuzzy, skin.
                    </p>
                </div>
                <div className="roadmap">
                    <h1>Roadmap & Whitepaper</h1> 
                    <br />
                         <a href="roadMap" target="_blank" rel="noreferrer">
                         <FaMap/>
                        </a>
                        <a href="whitePaper" target="_blank" rel="noreferrer">
                         <IoIosPaper/>
                        </a>
                    <p>Every NFT doubles as a vote in the SickDao.</p>
                    <p>You choose collectively which projects to support from the treasury.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About