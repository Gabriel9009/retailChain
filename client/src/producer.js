import React, { useEffect , useState, useContext } from "react"
import Menu from "./menu"
import "./css/index.css"
import Web3 from "web3"
// import useWeb3 from "./useWeb3"
//import web3Context from "./webContext"
import { Outlet } from "react-router-dom"
// import abi from "../src/build/contracts/retail.json"
import init from "./webClient"


let selectedAccount;

function Producer (){
  
  useEffect(()=>{
    init()
  },[])

const connectWallet= async()=>{
    let provider = window.ethereum;

if (typeof provider !== 'undefined') {

provider
.request({method: 'eth_requestAccounts' })
.then((accounts) => {
  selectedAccount = accounts[0];
  console.log(`Selected account is ${selectedAccount}`);
})
.catch((err) => {
  console.log(err);
  return;
});
window.ethereum.on('accountsChanged', function (accounts){
  selectedAccount = accounts[0];
  console.log(`Selected account changed to ${selectedAccount}`);
});
  }
}
 
  return(
    
    <div className="Producer">
      <h1>producer </h1>
      <Menu isProducer={true}></Menu>
      <div className="menu">
        <button className="link li2" onClick={connectWallet}>Connect wallet</button>
      </div>
      <Outlet/>
    </div>
    )
}


export default Producer
