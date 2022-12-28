import React from 'react';
import WalletConnect from './walletConnect';
import DarkMode from './darkMode';
import './headerMint.css';


const HeaderMint = ({ setAccounts, theme, setTheme }) => {
    
    return (
        <div className='headerR'>
            <WalletConnect setAccounts={setAccounts}/>
            <DarkMode theme={theme} setTheme={setTheme}/>
        </div>
    )
}

export default HeaderMint