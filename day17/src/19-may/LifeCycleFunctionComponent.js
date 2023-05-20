import { useEffect } from "react"

export default function LifeCycleF({num1})
{

    //Called just after mounting
    useEffect(()=>{
        console.log("The component LifeCycle F is mounted ")
        return ()=>{ console.log("component unmounted callback within callback")}
    },[])

    
    //just after the prop or state variable changes 
    useEffect(()=>{
        console.log("the prop has changed")
    },[num1])







    return <h1>This is a Lifecycle Function {num1} </h1>
}