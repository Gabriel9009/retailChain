import React from "react"
import { Outlet } from "react-router-dom"
import Menu from "./menu"
// import Web3 from "web3"

const Warehouse =()=>{
  

  return (
      <div className="warehouse">
        <h1> Warehouse</h1>
        <Menu isProducer={false}></Menu>
       <Outlet/>
      </div>
    )
}

export default Warehouse