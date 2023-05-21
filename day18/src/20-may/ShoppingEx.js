import axios from "axios"
import { Component } from "react"
import { Link } from "react-router-dom"

export default class ShoppingEx extends Component{
    
    constructor(){
        super()
        this.state ={prodId:"",optionarr:[],arr:[],cartarr:[]}
    }

    componentDidMount(){
        axios.get('./shopstock.json').then((resp)=>{        
            let temp = resp.data.map((e,ind)=>{return <option key={e.id} value={e.id}>{e.item_name}</option>})
            this.setState({optionarr:temp,arr:resp.data})
            
        })
    }

    addToCart=(obj)=>{
          let temp=[...this.state.cartarr]
          temp.push(obj)
          this.setState({cartarr:temp})
    }


    render(){
        return(
            <div className="Main">
                <div className="ShoppingMain">
                    <select onChange={(e)=>{this.setState({prodId:e.target.value})}}>
                        {this.state.optionarr}
                    </select>
                </div>
                 {this.state.prodId==""?"":<ProductDetails selectedobj={this.state.arr.find((e)=>{return e.id===this.state.prodId})}  func={this.addToCart}></ProductDetails>}
                 <ShoppingCart cartarr={this.state.cartarr}></ShoppingCart>
                 <p><Link to={`/alpha/${this.state.prodId}`}>USE PARAMS</Link></p>
            </div>
        )
    }
}

export class ProductDetails extends Component{
    constructor(props){
        super(props)
        this.state={qty:0}
    }
    

    render(){
        return (
            <div className='ProductDesc'>
                id : {this.props.selectedobj.id}<br/>
                item name : {this.props.selectedobj.item_name}<br/>
                unit cost : {this.props.selectedobj.unit_cost}<br/>
                Select Quantity : <input type="number" id="qty" onInput={(e)=>{this.setState({qty:e.target.value})}}/><br/>
                 <input type="button" onClick={()=>{this.props.func({...this.props.selectedobj,qty:this.state.qty})}} value=
                 "ADD TO CART"></input>
            </div>
        )
    }
}



export class ShoppingCart extends Component{
    constructor(props){
        super(props)
        let x
        this.state={remId:0}
    }

    render(){
        return(
            <div>
                {
                    this.props.cartarr.length>0 
                        &&
                    <table className="table">
                        <thead>
                            <tr><td>Name</td><td>Cost</td><td>Quantity</td><td>Total Cost</td><td></td></tr>
                        </thead>
                        <tbody>
                            {this.props.cartarr.map((x,ind)=>{return <tr key={ind}>
                                                                    <td>{x.item_name}</td>
                                                                    <td>{x.unit_cost}</td>
                                                                    <td>{x.qty}</td>
                                                                    <td>{x.unit_cost * x.qty}</td>
                                                                    <td><button onClick={()=>{this.props.cartarr.splice(ind,1)
                                                                                              this.setState({remId:ind})
                                                                    } }>Remove</button></td>
                                                                </tr>})}
                        </tbody>
                    </table>                   
                }
            </div>
        )
    }
}