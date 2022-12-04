import React from "react"
import {Link} from "react-router-dom"
import App from "./App"
import "./css/App.css"
import { useNavigate } from "react-router-dom"

function Menu ({isProducer}){
    const navigate = useNavigate();
    const producerPage =()=>{

        navigate("/form")
      }
    return(
        <div className="menu">
            { isProducer && <Link to="/producer/Record" className="link" > Record</Link>}
            {isProducer ? <Link to="/producer/check" className="link">check</Link> : <Link to="/warehouse/check" className="link" >check</Link> }
            {}
        </div>
    )
}

export default Menu