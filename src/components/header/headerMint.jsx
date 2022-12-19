import React, {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './headerR.css';


const HeaderRight = ({ accounts, setAccounts }) => {
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    async function connectWalletHandler(){
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            accountChangedHandler(accounts[0]);
            setAccounts(accounts);
            console.log(accounts[0]);
            toast.success(
                "You succesfully connected Metamask!\n\nYou are ready to mint now",
                {
                  duration: 4000,
                }
            );
        } 
        else {
            toast.error("You need Metamask to mint our NFTs!")
        }
    }

    const accountChangedHandler = (newAccount) =>{
        var addressString= newAccount.toString();
        setConnButtonText(addressString.slice(0, 7) + '...' + addressString.slice(-4));
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
        <section>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='headerR'>
                <div className="container header__connection">
                    <button
                        onClick={connectWalletHandler}
                    >{connButtonText}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeaderRight