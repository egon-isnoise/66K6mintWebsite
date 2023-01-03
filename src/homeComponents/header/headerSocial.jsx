import React from 'react';
import './headerSocial.css';
import {FaInstagramSquare, FaTwitterSquare, FaDiscord} from 'react-icons/fa'
import { Noise } from '../icons/noise';
import { Etherscan } from '../icons/etherscan';

const HeaderSocial = () => {

    return (
        <section>
            <div className='headerL'>
                <div className="container header__socials">
                    <a href="#home" target="_blank" rel="noreferrer">
                        <div className="egonisnoise">
                            <Noise/>
                        </div>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaInstagramSquare/>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaTwitterSquare/>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaDiscord/>
                    </a>
                    <a href="https://goerli.etherscan.io/address/0xa0253d08ac1736b9445bd4a2e75b876fecf89aee" 
                        target="_blank" rel="noreferrer">
                        <Etherscan/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeaderSocial