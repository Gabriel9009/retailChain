import React from "react";
import { useNavigate } from "react-router-dom"
import "./css/index.css"

function Signin(){
  const navigate = useNavigate();
  
  const producerPage =()=>{

    navigate("/producer")
  }
  
  const wareHousePage = ()=>{
    navigate("/warehouse")
  }
  
  return(
    <div className="signin">
      <div className="logCard">
        {/* <Connect /> */}
        <div className="logBtn" onClick={producerPage}>producer </div>
        <div className="logBtn" onClick={wareHousePage}>Warehouse</div>
      </div>
    </div>
    )
}

export default Signin; 