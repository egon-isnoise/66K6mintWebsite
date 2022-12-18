import React from 'react';
import './headerL.css';
import {FaInstagramSquare, FaTwitterSquare, FaDiscord} from 'react-icons/fa'


const HeaderLeft = () => {
    return (
        <section>
            <div className='headerL'>
                <div className="container header__socials">
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaInstagramSquare/>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaTwitterSquare/>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaDiscord/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeaderLeft