import { useState } from "react";
import LifeCycleCEx from "./LifeCycleClassComponent";
import MainComponent from "./MainComponent";
import PutAjaxEx from "./PutAjaxEx";
import AjaxWithReactF from "./ajaxwithreact";
import Fruits from "./fruitshw";
import PopulateData from "./PopulateData";
import LifeCycleF from "./LifeCycleFunctionComponent";

export default function App19()
{
    
     let [choice,setchoice]=useState(false)
     let [msg,setmsg] = useState("hi")
    return <>
    {/* <PopulateData></PopulateData> */}
      <input type="checkbox" onChange={(e)=>{setchoice(e.target.checked)}} ></input>
     <input type="text" onBlur={(e)=>{setmsg(e.target.value)}} ></input>
     {choice && <LifeCycleF num1={msg}></LifeCycleF>}
     {/*{choice && <LifeCycleCEx message={msg}></LifeCycleCEx>} */}
    {/* <PutAjaxEx></PutAjaxEx> */}
    {/* <MainComponent></MainComponent> */}
    {/* <Fruits></Fruits>
    <AjaxWithReactF></AjaxWithReactF> */}
    </>
}