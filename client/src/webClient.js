// const web4 = require("web3-eth")
import Web3 from "web3"
import { Outlet } from "react-router-dom"
import abi from "./retail.json"



const CONTRACT_ADDS = "0x1d3CFCbC0aC9BD5bBBf7EF5E4ffbA88fF528E289"
let selectedAccount;
let name= "teddy";
let num= 12;
let quant= 34;
let price= 30;
let add= selectedAccount;
  const init= async()=>{
  const contractAbi = abi;
  
  let provider = window.ethereum;

  const web3 = await new Web3("https://rpc-mumbai.maticvigil.com/ ")

  const id = web3.eth.net.getId()
  let address = CONTRACT_ADDS
  const contract = await new web3.eth.Contract(contractAbi, address,)
  // contract.methods.record_item(name,num,price,quant,add).send({from:add})
  const cona = contract.defaultAccount()
  console.log(cona)
  .on( result =>{console.log(result)})
  }




export default init 