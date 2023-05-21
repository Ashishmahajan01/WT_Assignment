import { Link, Outlet } from "react-router-dom"

export default function Greeting(){

    

    return (
    <div>
        <p><Link to="/shopping">Shop Here</Link></p>
        <p><Link to="/fruits">Fruit </Link></p>
        <p><Link to="/shopping2">Shop Here2</Link></p>

        <div style={{border:"2px solid red"}}>
            <Outlet></Outlet>
        </div>
    </div>
    )
}