import { Link, Outlet } from "react-router-dom";

export default function LastDay()
{
    return (
        <div>
            <div >
            <span style={{float:"left",margin:"4px"}}><Link to="/refexf">UseRefFunction</Link></span>
            <span style={{float:"left",margin:"4px"}}><Link to="/refexc">UseRefClass</Link></span> 
            <span style={{float:"left",margin:"4px"}}><Link to="/grid">Boot Grid</Link></span> 
            <span style={{float:"left",margin:"4px"}}><Link to="/reduxu1">Redux</Link></span> 
            <span style={{float:"left",margin:"4px"}}><Link to="/c1">C1</Link></span> 
            <span style={{float:"left",margin:"4px"}}><Link to="/c2">C2</Link></span> 
            </div>
            <br></br>
            <br></br>
            <div style={{width:"fit-content",padding:"20px",border:"2px solid blue",margin:"100px"}}>
            <Outlet></Outlet>
            </div>
        </div>
    )
}