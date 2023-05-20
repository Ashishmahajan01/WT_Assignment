import axios from "axios"
import {  useState } from "react"

export default function HttpGetEx()
{
    let [options,setOpt] = useState()

    function handler(){
        axios.get("./shopstock.json").then(resp=>{
            
            let d = resp.data.map((e,index)=>{
                return <option key={e.id} value={index}>{e.item_name}{e.unit_cost}</option>
            })
            setOpt(d)

        })
    }

    return(
        <>
        <button onClick={handler}>OK</button>
        <select>{options}</select>
        </>
    )
}
