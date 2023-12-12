import React,{Component} from "react";
var price=100;
export default class State extends Component
{
    state={
        color:"Yellow",
        price:price
    }
    handleChange=()=>
    {
        this.setState({color:"red"})
    }
    Offer=()=>
    {
        this.setState({
           price:price--
        })
    }
    render()
    {
        return(
            <div>
                <h1>
                    the color is {this.state.color} the price is {this.state.price}
                </h1>
                <button onClick={this.handleChange}>Change</button>
                <button onClick={this.Offer}>Offer</button>
            </div>
        )
    }
}