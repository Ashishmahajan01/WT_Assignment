import axios from "axios"
import { Component } from "react";
export default class Shoppingcart2 extends Component {


    constructor() {
        super()
        this.state = {test:false, arr: [], msg: "", hide1: false, totalcost: 0, hide2: false, usercart: [], finalcart: [] }
        this.products = []
        this.index = -1
        this.quantity = 0
        this.total = 0
        this.cart = []


    }

    componentDidMount() {
        let promise = axios.get("./shopstock.json")
        promise.then((res) => {
            let arr = res.data
            this.products = res.data
            let temp = arr.map((ele, index) => {
                return <option value={index}>{ele.id}</option>
            })
            this.setState({ arr: temp })
        })

    }
    display = (e) => {
        this.index = e.target.value
        this.setState({ msg: " Item name :" + this.products[this.index].item_name + "   " + " Unit Cost: " + this.products[this.index].unit_cost })
        this.setState({ hide1: true })
        this.setState({ hide2: true })

    }

    quantity1 = (e) => {

        console.log(this.index)
        this.total = this.products[this.index].unit_cost * this.quantity
        this.setState({ totalcost: this.total })

    }
    carts = () => {
        console.log(145)
        let pobj = {
            p_id: this.products[this.index].id,
            Item_Name: this.products[this.index].item_name,
            Quantity: this.quantity,
            p_cost: this.products[this.index].unit_cost,
            Subtotal: this.total
        }
        this.cart.push(pobj)
        //this.state.usercart.push(this.cart)
         this.setState({usercart :this.cart})
        console.log("show cart", this.state.usercart)
        // console.log("pobj",pobj)
        // console.log("cart",this.cart)

    }

    handler =()=>{
        let temp = this.state.test
        this.setState({test:!temp})
    }


    



    // showcart = () => {
    //     this.state.usercart.map((e) =>{}`1`
    //     return (
    //         {e.p_id}
    //         {e.Item_Name}
    //         {e.p_cost}
    //         {e.Quantity}
    //         {e.Subtotal})
    // }

    render() {
        return <div>
            Drop down :<select onChange={this.display}>
                {this.state.arr}
            </select>

            <p>{this.state.msg}</p>
            {this.state.hide1 && <p>Enter Quantity :<input type="number" onBlur={(e) => { return this.quantity = e.target.value }}></input></p>}
            {this.state.hide2 && <><button onClick={this.quantity1}>Get totalcost</button> <button onClick={this.carts} > Add to cart</button></>}

            {this.state.hide2 && <p>Total cost for items :{this.state.totalcost}</p>}
            {this.state.hide2 && <><button onClick={this.handler}>Show Cart</button> 
            <table border="1" >
                
                <tbody>
                    {this.state.usercart.map((e,index)=>{
                        return(
                       <tr key={index}>
                       <td>{e.p_id}</td>
                       <td>{e.Item_Name}</td>
                       <td>{e.p_cost}</td>
                       <td>{e.Quantity}</td>
                       <td>{e.Subtotal}</td>
                       <td><button onClick={()=>{let temp =[...this.state.usercart] 
                                temp.splice(index,1)
                                this.setState({usercart:temp})
                            }}>Remove</button></td>
                   </tr>)
       
                    })}
                </tbody>  
            </table></>
           

        
            }
            </div>
 }
}