import React, { Component } from "react";
import axios from "axios";

export default class ItemSelection extends Component {
    constructor() {
        super()
        this.state =
        {
            selectedID: "",
            items: [],
            totalCost: 0,
            quantity: 1,
        };

    }

    componentDidMount() {
       
        console.log("Component is mounted.....")

        axios.get("./shopstock.json")
            .then((response) => {
                this.setState({ items: response.data });
            })
    }

    handleIDSelect = (event) => {
        let selectedID = event.target.value;
        let selectedItem = this.state.items.find((item) => item.id === selectedID);
        let item1 = selectedItem.item_name;
        let unitcost = selectedItem.unit_cost;
        // let quantity=selectedItem.quantity

        console.log(item1)
        console.log(unitcost)
        this.setState({ selectedID, item1, unitcost });
    }

    handler = ((e) => {

        this.quantity = document.getElementById("i1").value
        let selectedID = document.getElementById("s1").value;
        let selectedItem = this.state.items.find((item) => item.id === selectedID);
        // let item1 =selectedItem.item_name;
        let unitcost = selectedItem.unit_cost;

        //  this.setState(this.quantity)
        console.log(this.quantity)



        this.totalCost = (selectedItem.unit_cost * this.quantity)
        //  this.setState(this.totalCost);
        console.log(this.totalCost)



    })


    render() {
      let { selectedID, items, item1, unitcost } = this.state;

        return (
            <div>
                <h2>Select an ID:</h2>
                <select value={selectedID} id="s1" onChange={this.handleIDSelect}>
                    <option value="">-- Select --</option>
                    {items.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.id}
                        </option>
                    ))}
                </select>

                {selectedID && (
                    <div>
                        <h3>Selected ID: {selectedID}</h3>
                        <p>Item : {item1}</p>
                        <p>Unit Cost : {unitcost}</p>
                        <input type="number" id="i1" />
                        <input type="button" value="total" id="b1" onClick={this.handler} />
                        <p>Total cost:{this.state.totalCost}</p>
                    </div>
                )}
            </div>
        );
    }
}