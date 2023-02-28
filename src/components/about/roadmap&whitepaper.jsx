import React from "react";
import {FaMap} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io';
import './roadmap&whitepaper.css';

const RoadWhite = () => {
    return(
        <section id="roadwhite">
            <div className="roadmap_description_container">
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

export default RoadWhite