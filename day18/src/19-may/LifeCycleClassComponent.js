import { Component } from "react";

export default class LifeCycleCEx extends Component
{

    constructor(props)
    {
        super(props)
        console.log("object of LifeCycleEx created")
    }

    componentDidMount()
    {
        console.log("the LifeCycle component is mounted")
    }

    componentWillUnmount()
    {
        console.log("the LifeCycle component is about to be UNmounted")
    }

    componentDidUpdate()
    {
        console.log("the Lifecycle component is updated")
    }


    render(){
       return <h1>The LifeCycle Component {this.props.message}</h1>
    }


}