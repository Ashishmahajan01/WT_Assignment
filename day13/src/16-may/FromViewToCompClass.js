import { Component } from "react";

export default class FromViewToCompClass extends Component
{
    constructor()
    {
        super()
        this.selectedstate=""
        this.handler1 = this.handler1.bind(this)
    }

    handler1(e)
    {
        this.selectedstate=e.target.value
        console.log(this.selectedstate)
    }

    render()
    {
        return <div>
            <select onChange={this.handler1}>
                <option value="MH">Maharashtra</option>
                <option value="TN">Tamilnadu</option>
                <option value="KA">Karnataka</option>
            </select>
        </div>
    }
}