import Fromview from "../hw/hw1";
import Add from "./Add";
import Factorial from "./Factorial";
import FromViewToComp from "./FromViewToComp";
import FromViewToCompClass from "./FromViewToCompClass";
import SquareF from "./SquareF";
import Square from "./SquareF";
import TrialProps from "./TrialProps";

export default function App16()
{
    let obj = {xcoordinate:12,ycoordinate:20}
    let arr=[12,3,55]

    function alpha()
    {
        console.log("ALPHA IS CALLED")
    }

    return <div>
        <Fromview></Fromview>
        {/* <SquareF></SquareF> */}
        {/* <FromViewToCompClass></FromViewToCompClass> */}
        {/* <FromViewToComp></FromViewToComp> */}

        {/* <TrialProps func1={alpha} flag={true} point={obj} num1={45} str={"PPP"} arr={[10,20,30]} ></TrialProps>
        <TrialProps point={obj} num1="45" arr={arr}></TrialProps> */}
        
         <Factorial num1={5}></Factorial>
        <Factorial num1={12}></Factorial>
       {/* <Add num1={12} num2={13}></Add>
        <Add num1={100} num2={13}></Add>
        <Add num1={121} num2={13}></Add>
        <Add num1={1} num2={3}></Add>
         */}
    </div>


}