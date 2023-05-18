import { useState } from "react";

// export default function Addition(){
//     let name = "";

//     let [user,setUser]=useState("");
//     function takeInput(e){   
//         name=e.target.value
//     }
//     function checkName(event){        
//         setUser(name);
//     }   
//   return <div>            
//             <input type="text" placeholder="Enter Your Name" onChange={takeInput}></input>            
//             <button onClick={checkName}>SUBMIT</button>
//             <p> Hello {user} How are You....!</p>            
//          </div>  

// } 


// export default function PropsMagic(props){

//     return <div>
//         <p>You Entered {props.num1}</p>
//     </div>

// }
// export default function PropsMagic(){
// function showDetail(e) {
//     let a=e.target.name
//     if(a=="weekday")  {console.log("sun,mon,tue")} 
//     if(a=="color")  {console.log("red,blue,green")} 
// }
// return <div>
//     <button name="weekday" onClick={showDetail}>WEEKDAY</button>
//     <button name="color" onClick={showDetail}>COLOR</button>
//     <p> Clicked : {}</p>
// </div>

// }


export default function Add(){
    let [sum,setSum]=useState(0)
    let number1,number2;
    
    function num1(e){
        number1=parseInt(e.target.value);
        console.log(number1);
    }
    function num2(e){
        number2=parseInt(e.target.value);
        console.log(number2);
    }
    function showSum(){
        sum=number1+number2;   
        console.log(sum); 
        setSum(sum);   
    }


    return <main>

        <input type="number" placeholder="0" onBlur={num1}></input>
        <input type="number" placeholder="0" onBlur={num2}></input>
        <button onClick={showSum}>SUM</button>
        <pre>SUM is= {sum} </pre>


    </main>

}