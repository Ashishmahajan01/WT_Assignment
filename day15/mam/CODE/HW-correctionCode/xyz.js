// . Write a React Component to accept user details
//  name
//  email 
//  dropdown Graduate, PG , UnderGrad
// If the user selects Graduate show GraduateComponent degree, year, 
// final year score, univ
// If the user selects PG show PGComponent year, Thesis subject
// If the user selects UnderGrad show UnderGradComponent SSC , HSC
// ( USE conditional Renderring )

import React, { useState } from "react";
import GraduateComponent from "./GraduateComponent";
import PGComponent  from "./PG";
import UGComponent from "./UnderGrad";

// import {useState} from React

export default function UserDetails()
{
    let [choice,setchoice] = useState("")

    return <div>
       Usename: <input type="text" name="uname"/>
       <br></br>  <br></br>
        Email:<input type="text" name="email"/>
        <br></br>
        <br></br>
        <select onChange={(e)=>{setchoice(e.target.value)}}>
            <option value="Graduate" >Graduate</option>
            <option value="PG" >Post Graduate</option>
            <option value="UG" >Under Graduate</option>
        </select>

    {choice==="Graduate"?<GraduateComponent></GraduateComponent>:""}
    {choice==="PG"?<PGComponent></PGComponent>:""}
    {choice==="UG" && <UGComponent></UGComponent>}


</div>
}