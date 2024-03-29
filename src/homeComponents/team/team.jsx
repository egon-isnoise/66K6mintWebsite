import React from "react";
import './team.css';
import IMAGE1 from '../../assets/17.png'
import IMAGE2 from '../../assets/xefler.png'
import IMAGE3 from '../../assets/ninia.png'
import IMAGE4 from '../../assets/gioggio.png'

import {FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Team = () => {
    return(
        <section id="team">
            <div className="container team__container">
                
                <div className="member_container">
                    <img src={IMAGE1} alt="egonisnoise"/>
                    <div className="description_socials">
                        <h1> Development </h1>
                        <p>egonsisnoise.eth/.tez</p>
                        <div className="links_socials">
                            <a href="https://www.instagram.com/egonisnoise.eth" target="_blank" rel="noreferrer">
                                <FaInstagramSquare/>
                            </a>
                            <a href="https://twitter.com/egonisnoise" target="_blank" rel="noreferrer">
                                <FaTwitterSquare/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="member_container">
                <img src={IMAGE2} alt="Xefler"/>
                    <div className="description_socials">
                        <h1> Design </h1>
                        <p>Xefler</p>
                        <div className="links_socials">
                            <a href="https://www.instagram.com/xefler_/?theme=dark" target="_blank" rel="noreferrer">
                                <FaInstagramSquare/>
                            </a>
                            <a href="https://twitter.com/Xefler2022" target="_blank" rel="noreferrer">
                                <FaTwitterSquare/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container team__container">
            <div className="member_container">
                <img src={IMAGE3} alt="Xefler"/>
                    <div className="description_socials">
                        <h1>Community</h1>
                        <p>HappyCatto</p>
                        <div className="links_socials">
                            <a href="https://www.instagram.com/xefler_/?theme=dark" target="_blank" rel="noreferrer">
                                <FaInstagramSquare/>
                            </a>
                            <a href="https://twitter.com/Xefler2022" target="_blank" rel="noreferrer">
                                <FaTwitterSquare/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="member_container">
                    <img src={IMAGE4} alt="egonisnoise"/>
                    <div className="description_socials">
                        <h1>Copywriting</h1>
                        <p>Giorgio Puleo</p>
                        <div className="links_socials">
                            <a href="https://www.instagram.com/egonisnoise.eth" target="_blank" rel="noreferrer">
                                <FaInstagramSquare/>
                            </a>
                            <a href="https://twitter.com/egonisnoise" target="_blank" rel="noreferrer">
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