import  { useState } from "react"



import React from "react"
export default function GraduateComponent() {

    let [gr, grf] = useState("")
    // let [pg,pgf]=useState("")
    // let [ug,ugf]=useState("")

    return <div>
        <h5>Graduate Component</h5>
        <select>
            <ul><li>Final year Score=99</li></ul>
            <ul><li>University="Pune"</li></ul>
            {/* <ul><li>Final year Score=99</li></ul> */}
        </select>
    </div>
}