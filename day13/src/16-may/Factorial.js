import { Component } from "react";

export default class Factorial extends Component
{
    constructor(props)
    {
        super(props)
        this.a= props.num100
    }
    calcFact()
    {
        let fact=1
        //for(var i=1;i<=this.a;i++)
        for(var i=1;i<=this.props.num100;i++)
        {
            fact=fact*i
        }
        return fact
    }
    render()
    {
        return <div>
            <p>Factorial of {this.props.num100} is {this.calcFact()}</p>
        </div>
    }

}