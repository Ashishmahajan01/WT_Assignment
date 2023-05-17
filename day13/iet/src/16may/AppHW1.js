//import React from "react";
import { Component } from "react";


export default class akash extends Component {
    constructor(props) {
        super(props)
        this.akki = props.num1
        // console.log(this.akki)
    }

    Trial() {
        /// this.a = props.num1
        let fact = 1;

        for (let i = 2; i <= this.props.num1; i++) {
            fact = fact * i;
            console.log("i", i)
            console.log("fact ", fact)

        }
        // console.log(fact)
        return fact


    }
    render() {
        return <div>
            <p >{this.akki} factorial of {this.Trial()} </p>
        </div>
    }



}