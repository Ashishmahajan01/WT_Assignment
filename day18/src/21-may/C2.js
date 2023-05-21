import { useDispatch, useSelector } from "react-redux";

export default function C2()
{
    const counter = useSelector((state)=>{return state.counter});
    const mylist = useSelector((state)=>{return state.mylist});
    //const dispatch= useDispatch()
    let stringified =localStorage.getItem("info")
    let obj = JSON.parse(stringified)
   return(
    <div>
    <p>HERE WE SEE DATA {localStorage.getItem("data")}</p>
    <p>HERE WE SEE DATA {obj.id}</p>
    <p>HERE WE SEE SS DATA {counter}</p>
    <p>{mylist}</p>
    </div>
   )
}