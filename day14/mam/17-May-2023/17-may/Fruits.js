import { Component } from "react";

export default class Fruits extends Component
{
    constructor()
    {
        super()
        this.state ={arr:["mango","plum"]}
    }
    handler=(e)=>{

        let fruitname= e.target.value
        let temp =[...this.state.arr] //copy
        temp.push(fruitname)
        console.log(this.state)
        //this.setState({arr:this.state.arr}) // the old and new address of arr is same so RERENDER is not ordered
        this.setState({arr:temp}) // As the temp has different address hence RERENDER is ordered
    }

    getLi=()=>{
        // let arrayoflistitems =[]
        // for(var i=0;i<this.state.arr.length;i++)
        // {
        //     let jsxelement=<li>{this.state.arr[i]}</li>
        //     arrayoflistitems.push(jsxelement)
        // }
        // return arrayoflistitems

        return this.state.arr.map((fruitname,index)=>{return <li key={index}>{fruitname}</li>})
    }
    render()
    {
        return <div style={{margin:"10px"}} className="outline">
            Add:Fruit<input type="text" onBlur={this.handler}  ></input>
            <br></br>
            <ol style={{textAlign:"left"}}>
              {this.getLi()}
            </ol>
            {/* <p>Arr = {this.state.arr}</p> */}
        </div>
    }
}