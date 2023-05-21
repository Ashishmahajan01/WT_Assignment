import axios from "axios"
import { useState } from "react"
import ShowEmployee from "./ShowEmployee"

export default function MainComponent()
{   let [arr,setarr] =useState([])
    let id=0
    function display()
    {   return arr.map((employee)=>{
        return <ShowEmployee id={employee.id}
        first_name={employee.first_name}
        last_name={employee.last_name}
        email={employee.email}
        avatar={employee.avatar} ></ShowEmployee>
      })  
    }
    function handler()
    {   //fire the get http query
        let p =axios.get(`https://reqres.in/api/users/${id}`)
        p.then((resp)=>{
             let obj = resp.data.data
             console.log(obj)
             arr.push(obj)
             setarr([...arr])
             
        })
    }
    return <>
      <input type="number" onBlur={(e)=>{id=e.target.value}} />
      <input type="button" value="getEmp"  onClick={handler}/>
     {display()}
    </>

}