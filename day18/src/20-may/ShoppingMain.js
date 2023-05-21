import axios from "axios"
import { Component } from "react"
import './Main.css'

export default class ShoppingMain extends Component{

    
    constructor(){
        super()
        this.rarr = []
        this.state = {optionarr:[],prod:"",cartarr:[],qty:0,up:0}
    }

    componentDidMount(){
        axios.get('./shopstock.json').then((resp)=>{
            let arr = resp.data
            let temp = arr.map((e,ind)=>{return <option key={e.id} value={JSON.stringify(e)}>{e.item_name}</option>})
            this.setState({optionarr:temp})
        })
    }

    addToCart(e){
        //console.log("add to cart ",JSON.stringify(e))
        let temp = this.state.cartarr.map((e)=>{return e})
        temp.push(e)
        this.setState({cartarr:temp})
    }

    render(){
        return(
            <div className="Main">
                <div className="ShoppingMain">
                    <select onChange={(e)=>{this.setState({prod:e.target.value})}}>
                        {this.state.optionarr}
                    </select>
                    <button onClick={e=>{this.setState({up:++this.state.up})}}>RENDER</button>
                </div>
                    {this.state.prod!="" && <ProductDetails key={this.state.prod} prod={this.state.prod} cartfunc={this.addToCart} state={this.state}></ProductDetails>}
                    <ShoppingCart key={this.state.up} cart={this.state.cartarr} state={this.state}></ShoppingCart>
            </div>
        )
    }
}

export class ProductDetails extends Component{
    constructor(props){
        super(props)
        this.prod = JSON.parse(props.prod)
        this.func = props.cartfunc
        this.state = {...props.state}
    }

    render(){
        return (
            <div className='ProductDesc'>
                id : {this.prod.id}<br/>
                item name : {this.prod.item_name}<br/>
                unit cost : {this.prod.unit_cost}<br/>
                Select Quantity : <input type="number" id="qty" onInput={(e)=>{this.setState({qty:e.target.value})}}/><br/>
                <div>
                    <p>Total cost {this.state.qty * this.prod.unit_cost}</p>
                    <button onClick={this.func({...this.prod,qty:this.state.qty})}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export class ShoppingCart extends Component{
    constructor(props){
        super(props)
        this.cartarr = props.cart
        this.state = {...props.state}
    }

    render(){
        return(
            <div>
                {
                    this.cartarr.length>0 
                        &&
                    <table className="table">
                        <thead>
                            <tr><td>Name</td><td>Cost</td><td>Quantity</td><td>Total Cost</td><td></td></tr>
                        </thead>
                        <tbody>
                            {this.cartarr.map((x,ind)=>{return <tr key={ind}>
                                                                    <td>{x.name}</td>
                                                                    <td>{x.cost}</td>
                                                                    <td>{x.qty}</td>
                                                                    <td>{x.cost * x.qty}</td>
                                                                    <td><button onClick={()=>{this.cartarr.splice(ind,1)}}>Remove</button></td>
                                                                </tr>})}
                        </tbody>
                    </table>                   
                }
            </div>
        )
    }
}