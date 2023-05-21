import { useState } from "react"

export default function Fromview(){

  let [textvalue,setText] = useState("")    
  let [u,setupper]=useState()
  function inputhandler(e)
  {
        setText(e.target.value)
        console.log("you entered=>",textvalue)       
  }
  function ucase(e)
  {
    if(e.target.checked)
        setupper(textvalue.toUpperCase())  
    else
        setupper(textvalue)
  }
  function lcase(e)
  {
    if(e.target.checked)
        setupper(textvalue.toLowerCase())  
    else
        setupper(textvalue)
  }
  function tcase(e)
  {
    if(e.target.checked)
        setupper(textvalue.charAt(0).toUpperCase().concat(textvalue.substring(1).toLowerCase()))  
    else
        setupper(textvalue)
  }

   function casehandler2(e)
   {
    let val = e.target.value
    switch(val)
    {
        case 'uc' :setupper(textvalue.toUpperCase());break;
        case 'lc' :setupper(textvalue.toLowerCase());break;
        case 'tc' :setupper(textvalue.charAt(0).toUpperCase().concat(textvalue.substring(1).toLowerCase()));break;
        default : break
    }     
   }

   function casehandler(val)
   {
    //let val = e.target.value
    switch(val)
    {
        case 'uc' :setupper(textvalue.toUpperCase());break;
        case 'lc' :setupper(textvalue.toLowerCase());break;
        case 'tc' :setupper(textvalue.charAt(0).toUpperCase().concat(textvalue.substring(1).toLowerCase()));break;
        default : break
    }     
   }


    return <div>     
     <br></br>
     <br></br>
     <hr></hr>
     <input type="text" name="data" onBlur={inputhandler} ></input>
     <br></br>
     UPPERCASE <input type="radio" name="casechoice" value="uc"  onChange={(e)=>{ casehandler(e.target.value)}} ></input>
     <br></br>
     lowercase <input type="radio" name="casechoice" value="lc" onChange={(e)=>{ casehandler(e.target.value)}} ></input>
     <br></br>
     Titlecase <input type="radio" name="casechoice" value="tc" onChange={(e)=>{ casehandler(e.target.value)}} ></input>
     <br></br>
     <p>Uppercase= {u} </p>
    </div>
} 