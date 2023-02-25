import React from 'react';
import {FaTwitterSquare, FaDiscord} from 'react-icons/fa'
import { Noise } from '../icons/noise';
import { Etherscan } from '../icons/etherscan';
import './mainFooter.css';

const MainFooter = () => {

    return (
        <>
        <section>
            <div className='footer'>
                <div className="container footer__socials">
                    <a href="egonisnoise" target="_blank" rel="noreferrer">
                        <div className="egonisnoise">
                            <Noise/>
                        </div>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaTwitterSquare/>
                    </a>
                    <a href="#home" target="_blank" rel="noreferrer">
                        <FaDiscord/>
                    </a>
                    <a href="https://goerli.etherscan.io/address/0xa0253d08ac1736b9445bd4a2e75b876fecf89aee" 
                        target="_blank" rel="noreferrer">
                            <div className="etherscan">
                                <Etherscan/>
                            </div>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default MainFooter