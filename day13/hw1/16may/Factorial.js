import { Component } from "react";

export default class factorial extends Component
{
    constructor(props)
    {
        super(props)
        this.a = props.n1
    }

    calfact()
    {
        let fact = 1
        for(var i = 1; i<=this.props.n1; i++)
        {
            fact=fact*i;
        }
        return fact
    }
}