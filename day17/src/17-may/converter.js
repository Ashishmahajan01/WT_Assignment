import { Component } from "react";
//import './Sep.css'
export default class Convert extends Component
{ 
state={con:0,to:"",from:""}
num
constructor()
{    
    super()
    this.num=0;
    
}
numS=(e)=>
{this.num=e.target.value
}
 result=()=>{
   let co=this.num
    if(this.state.from == this.state.to)
    {
      this.setState({con:co})
    }
    else if(this.state.from=="Euro" && this.state.to=="Dollar")
    {
        this.setState({con:(co *1.08)})
    }
    else if(this.state.from=="Euro" && this.state.to=="Rupees")
    {
        this.setState({con:(co *89.24)})
    }
    else if(this.state.from=="Rupees" && this.state.to=="Dollar")
    {
        this.setState({con:(co /82.42)})
    }
    else if(this.state.from=="Rupees" && this.state.to=="Euro")
    {
        this.setState({con:(co /89.24)})
    }
    else if(this.state.from=="Dollar" && this.state.to=="Rupees")
    {
        this.setState({con:(co *82.42)})
    }
    else if(this.state.from=="Dollar" && this.state.to=="Euro")
    {
        this.setState({con:(co *0.92)})
    }



 }

    render()
    {
        return <div className="Sep"><center>
            <input type="number" onBlur={this.numS} ></input>
            <br></br> <br></br>
        <select onChange={(e)=>{this.setState({from:e.target.value})}}>
        <option>Convert From </option>
        <option>Dollar</option>
        <option>Rupees</option>
        <option>Euro</option></select>
        <br></br> <br></br>
        <select onChange={(e)=>{this.setState({to:e.target.value})}} >
        <option>Convert to</option>
        <option>Dollar</option>
        <option>Rupees</option>
        <option>Euro</option></select>
        <br></br> <br></br>
        <button onClick={this.result}>convert</button>
        <p>{this.state.con}</p></center>
        </div>
    }
}