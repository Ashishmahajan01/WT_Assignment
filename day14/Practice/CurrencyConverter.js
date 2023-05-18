import { Component } from "react"
import '../CSS/Currency.css'

export default class CurrencyConverter extends Component{
    constructor(){
        super()
        this.state={
            finalAmount:0
        }
        this.from=0;
        this.to=0;
        this.amount=0;
        this.defaultValue=[1, 82.40, 89.30, 22.4, 0.60, 11.76];
    }

    fromCurrency=(e)=>{
        this.from=parseInt(e.target.value)
        console.log(this.from)
    }
    toCurrency=(e)=>{
        this.to= parseInt(e.target.value)
        console.log(this.to)
    }
    ConvertCurrency=(e)=>{
        this.setState({finalAmount:(this.amount * this.defaultValue[this.from])/this.defaultValue[this.to]})
        console.log(this.from)
        console.log(this.to)
        // console.log((this.amount * this.defaultValue[this.to])/this.defaultValue[this.from])
    }

    render(){
        return <main className="op border border-danger">
        <div>
        <input placeholder="AMOUNT" onBlur={(e)=>{this.amount=parseFloat(e.target.value)}} className="form-control"></input>
        </div>
        <select id="first" onChange={this.fromCurrency} className="drop btn btn-light">
            <option value="0">RUPPESS</option>
            <option value="1">DOLLAR</option>
            <option value="2">EURO</option>
            <option value="3">DIRHAM</option>
            <option value="4">YEN</option>
            <option value="5">YUAN</option>
        </select>
        
        <select onChange={this.toCurrency} className="drop btn btn-light">
            <option value="0">RUPPESSS</option>
            <option value="1">DOLLAR</option>
            <option value="2">EURO</option>
            <option value="3">DIRHAM</option>
            <option value="4">YEN</option>
            <option value="5">YUAN</option>
        </select>
        <img src=""></img>
        <button id="show" onClick={this.ConvertCurrency}>
           
        </button>
        <p>Converted Amount= {this.state.finalAmount}</p>
        </main>
    }   
}