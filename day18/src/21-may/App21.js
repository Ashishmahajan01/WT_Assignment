import { Route, Routes } from "react-router-dom";
import LastDay from "./LastDay";
import RefFuncEx from "./RefFuncEx";
import RefClassEx from "./RefClassEx";
import BootGridEx from "./BootGridEx";
import Counter from "./RC1";
import C1s from "./C1";
import C2 from "./C2";

export default function App21()
{
    return <Routes>
        <Route path="/" element={<LastDay></LastDay>}>
        <Route path="refexf" element={<RefFuncEx></RefFuncEx>}></Route>
        <Route path="/refexc" element={<RefClassEx></RefClassEx>}></Route>
        <Route path="/grid" element={<BootGridEx></BootGridEx>}></Route>
        <Route path="/reduxu1" element={<Counter></Counter>}></Route>
        <Route path="/c1" element={<C1s></C1s>}></Route> 
        <Route path="/c2" element={<C2></C2>}></Route>
       </Route>
    </Routes>
}