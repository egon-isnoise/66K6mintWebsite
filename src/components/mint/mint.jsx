import React, {useState} from 'react';
import {FaEthereum, FaLeaf} from 'react-icons/fa'
import { ethers, BigNumber } from 'ethers';
import './mint.css';
import GIF from '../../assets/9output.gif';
import SixSixkSixNFTABI from '../../6Sick6NFT.json';

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
                const response = await contract.mint(accounts[0], mintAmount);
                console.log('response: ', response);

            } catch (err) {
                console.log("error: ", err)
            }
        }
    }


    return(
        <section id="mint">
            <div className="container mint__container">
                <div className="sick_gif">
                    <img src={GIF} alt="6sick6 gif"/>
                </div>

                <div className="full_minting">
                    {isConnected ? (
                        <>
                        <p>0.1 ETH x NFT</p>
                        <p>max 10 mints x wallet</p>
                        <br />
                        <div className="more_less">
                            <div className="more_icon">
                               <FaEthereum/>
                            </div>
                            <button
                                onClick={handleDecrement}
                            >-</button>
                            <div className="mint_number"> {mintAmount} </div>
                            <button
                                onClick={handleIncrement}
                            >+</button>
                            <div className="more_icon">
                              <FaEthereum/>
                            </div>
                        </div>
                            <div>
                                <button
                                    className="minting_button"
                                    onClick={handleMint}
                                >Mint Now</button>
                            </div>
                        </>  
                    ):(
                        <>
                        <h1>Connect MetaMask to Mint</h1>
                        <div className="mint_icons">
                           <FaEthereum/>
                           <FaLeaf/>
                        </div>
                        </>
                    )}
                    

                </div>

            </div>
        </section>
    )
}

export default Mint