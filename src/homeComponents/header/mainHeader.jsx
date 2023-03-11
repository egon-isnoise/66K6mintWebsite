import React, {useState} from 'react';
import {FaInstagramSquare, FaTwitterSquare, FaDiscord} from 'react-icons/fa'
import { Noise } from '../icons/noise';
import toast, { Toaster } from 'react-hot-toast';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Switch from '@mui/material/Switch';
import './mainHeader.css';



const MainHeader = ({ setAccounts, theme, setTheme }) => {
    const toggleTheme = () =>{
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    async function connectWalletHandler(){
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            accountChangedHandler(accounts[0]);
            setAccounts(accounts);
            console.log(accounts[0]);
            toast(
                "You succesfully connected Metamask!\n\nYou are ready to mint now",
                {
                icon: '👁👁',
                  duration: 4000,
                  style: {
                    background: "rgba( 250, 250, 250, 0.55 )",
                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
                  },
                }
            );
        } 
        else {
            toast.error("You need Metamask to mint our NFTs!")
        }
    }

    const accountChangedHandler = (newAccount) =>{
        var addressString= newAccount.toString();
        setConnButtonText(addressString.slice(0, 10) + '...' + addressString.slice(-4));
        if(newAccount === 0 ){
            setConnButtonText('Connect Wallet')
        }
    }

    const chainChangedHandler = () => {
        window.location.reload();
        toast.success('You changed blockchain!\n\nGet back on ETH in order to mint');
    }

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountChangedHandler);
        window.ethereum.on('chainChanged', chainChangedHandler);
    }

    return (
        <>
        <section>
            <div className='header'>
                <div className="header__socials">
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
                </div>

                <Toaster
                    position="top-left"
                    reverseOrder={false}
                />
                <div className="container header__connection">
                    <div className="dark__mode">
                        <Brightness4Icon sx={{ fontSize: 50 }}/>
                        <Switch color="default" 
                            onChange={toggleTheme} 
                            checked={theme === "dark"}
                            size = "small"
                        />
                    </div>

                    <button
                        onClick={connectWalletHandler}
                    >{connButtonText}
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default MainHeader