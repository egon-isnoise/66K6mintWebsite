import React from "react";
import './team.css';
import IMAGE1 from '../../assets/egon.jpg'
import IMAGE2 from '../../assets/xefler.png'
import {FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Team = () => {
    return(
        <section id="team">
            <div className="container team__container">
                <div className="member_container">
                    <img src={IMAGE1} alt="egonisnoise"/>
                    <div className="description_socials">
                        <h1> Development </h1>
                        <p>Musician, multimedia artist & Web3 Developer</p>
                        <div className="links_socials">
                            <a href="#home" target="_blank" rel="noreferrer">
                                <FaInstagramSquare/>
                            </a>
                            <a href="#home" target="_blank" rel="noreferrer">
                                <FaTwitterSquare/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="member_container">
                    <img src={IMAGE2} alt="Xefler"/>
                    <div className="description_socials">
                        <h1> Design </h1>
                        <p>Photographer, wood artist</p>
                        <div className="links_socials">
                            <a href="#home" target="_blank" rel="noreferrer">
                                <FaInstagramSquare/>
                            </a>
                            <a href="#home" target="_blank" rel="noreferrer">
                                <FaTwitterSquare/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team