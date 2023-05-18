import '../CSS/Parent.css'
import { useState } from "react";
import SelectOptions from './Child'

export default function Calculation(){
    let[num1,setNum1]=useState(0);
    let[num2,setNum2]=useState(0);
    let[result,setResult]=useState(0);
    let[message,setMessage]=useState("");

    function textHandler(e){
         
        setNum1(e.target.value);
             
    }
    function textHandler1(e){
        setNum2(e.target.value);
        //  num2=e.target.value    
        // console.log(num2)
    }
    function setResult1(e){
        console.log(e)
        setResult(e) 
    }
    function changeMessage(e){
        console.log(e)
        setMessage(e) 
    }

    return <div id="maindiv" className="p-3 mb-2 bg-bs-gray-700 text-dark border border-warning">

        <h1 id="heading">FILL TO DO CALCULATION</h1>

        <br></br>

        <div className="input-group-text d-block p-2 text-bg-primary" id="input">
        <input type="text" placeholder="Enter First Number" className="form-control " onBlur={textHandler}></input>

        <br></br>

        <input type="text" placeholder="Enter Second Number" className="form-control" onBlur={textHandler1}></input>

        <br></br>

        <h2>RESULT : {result}</h2>

        </div>

        <SelectOptions f1={setResult1} no1={parseInt(num1)} no2={parseInt(num2)} msg={changeMessage}></SelectOptions>
        <p>{message}</p>
    </div>
}