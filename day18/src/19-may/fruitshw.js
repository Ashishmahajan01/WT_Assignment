import { useState } from "react"
export default function Fruits() {
    let [arr, setarr] = useState([])
    // let [arr2, setarr2] = useState([])
    let temp = []

    function addele(e) {

        arr.push(<option>{e.target.value}</option>)
        temp = [...arr]

        setarr(temp)
        //enter()
    }

    // function enter() {
    //     setarr(temp)

    // }


    return <div>
        Enter fruits name:<input type="text" onBlur={addele} placeholder="Enter fruit name"></input><b></b>
        <select >
            {arr}
        </select>

    </div>
}