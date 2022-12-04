import React, {useState} from "react"
import { useParams } from "react-router-dom";
import "./css/App.css"
import "./css/index.css"

function Form(){
    const {isform} = useParams();
    const [functionType,setFunctionType]= useState(false);
    const [itemName,setItemName] = useState(null);
    const [itemNum,setItemNum] = useState(null);
    const [itemPrice,setItemPrice] = useState(null);
    const [quantity,setQuantity] = useState(null);
    const [address,setAddress] = useState(null);
    
    var name = ''
    var num = ""
    const nameValue =(e)=>{
        name = e.target.value
        console.log(name)
    }

    const numValue =(e)=>{
        num =  e.target.value
        console.log(num)
    }

    const submit=()=>{
        setItemName(name)

    }

    const submitHandler = () =>{
        
    }

    return(
        <div className="form">
            {isform == "check" ? <h1 className="headline">CHECK ITEM</h1> : <h1 className="headline">RECORD ITEM</h1>}
            <div className="input" >
                <label htmlFor="">Item Name</label>
                <input type="text" name="NameOfItem" placeholder="Name of item" onChange={nameValue}/>

                <label htmlFor="">Item ID</label>
                <input type="text" name="itemNum" placeholder="item Number" onChange={numValue}/>

                {isform == "check" ? null : (<label htmlFor="">Item Price</label>)}
                {isform == "check" ? null : <input type="text" name="itemPrice" placeholder="Price of item" onChange={numValue}/>}
            
                {isform =="check" ? null : <label htmlFor="">Item Qunatity</label>}
                {isform == "check" ? null : <input type="text" name="itemQuantity" placeholder="Quantity" onChange={numValue}/>}
            </div>
            
               {isform == "check" ? <div className="btn">check</div> : <div className="btn">Record</div>}
            
        </div>
    )
}

export default Form;