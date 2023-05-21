import { useState } from "react";
import ParentComponent from "./ParentComponent";
import SquareC from "./SquareC";
import Header from "./header";
import Fruits from "./Fruits";
import Convert from "./converter.js"
import Loginclass from "./login";
import UserDetails from "./xyz";

export default function App17()
{
    let [hideflag,setflag] = useState(false)

    return <div>
        {/* {hideflag?"":<Header></Header>} */}
        { !hideflag && <Header></Header>}
        <UserDetails></UserDetails>
        <Loginclass></Loginclass>
        <Convert></Convert>
        <br></br>
        Hide Header :<input type="checkbox" onChange={(e)=>{setflag(e.target.checked)}}/>
        {/* <SquareC></SquareC>
        <ParentComponent></ParentComponent> */}
        <Fruits></Fruits>
    </div>
}