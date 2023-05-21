import axios from "axios";
import { Component } from "react";

export default class PopulateData extends Component
{
    constructor()
    {  super()
        this.state={optionarr:[]}
    }
    componentDidMount()
    {
        
        axios.get("./shopstock.json").then((resp)=>{
        
            let arr=resp.data
            console.log(arr)
            let temp = arr.map((e,index)=>{return <option key={index} value={e.id}>{e.item_name}</option>})
            this.setState({optionarr:temp})

        })
    }


    render()
    {
        return(
        <div>
            <select>{this.state.optionarr}</select>
        </div>)
    }
}