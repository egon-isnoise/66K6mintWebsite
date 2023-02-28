import React, {useState} from 'react';
import {FaEthereum} from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io';
import { ethers } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
import GIF from '../../assets/luceTrioRVB40.jpeg';
import SixSixkSixNFTABI from '../../6Sick6NFT.json';
import './mint.css';
import SimpleCarousel from './carousel';

const SixSixkSixNFTaddress = "0xA0253d08AC1736b9445BD4A2e75B876fEcF89aee";

const Mint = ({ accounts }) => {
    const isConnected = Boolean(accounts[0]);
    const [ mintAmount, setMintAmount] = useState(1);

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount -1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount +1);
    }

    async function handleMint() {
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                SixSixkSixNFTaddress,
                SixSixkSixNFTABI,
                signer
            );
            try {
                toast.success('Your NFT is on its way...\n\nWAIT for MetaMask to pop up!');
                const response = await contract.mint(accounts[0], mintAmount);
                console.log('response: ', response);

            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    return(
        <section id="mint">
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration:6000
                }}
            />
            <div className="container mint__container">
                <SimpleCarousel/>
                {/* <div className="sick_gif">
                    <img src={GIF} alt="6sick6 gif"/>
                </div> */}

                <div className="full_minting">
                    {isConnected ? (
                        <>
                        <div className="more_less">
                            <button className='increments'
                                onClick={handleDecrement}
                            >-</button>
                            <div className="mint_number"> {mintAmount} </div>
                            <button className='increments'
                                onClick={handleIncrement}
                            >+</button>
                        </div>
                            <div>
                                <button
                                    className="minting_button"
                                    onClick={handleMint}
                                >Mint</button>

                                <br />
                                <br />
                                <p>0.1 ETH x NFT</p>
                                <p>max 10 mints x wallet</p>
                            </div>
                        
                        </>  
                    ):(
                        <>
                        <div className="pre_mint">
                            <h1>Connect MetaMask to Mint</h1>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Mint