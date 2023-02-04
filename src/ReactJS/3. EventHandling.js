import React from "react";
import { Component } from "react";

class Event extends Component{
    constructor () {
        super();
        this.state={
            text: "",
            click: false
        }
    }

    handleClick =(e)=>{
        this.setState(
            {
                click: !this.state.click,
            }
        )
    }
    render(){
        return(
            <>
                <input 
                    type="text" 
                    onChange={(e)=>{
                        this.setState({text: e.target.value})
                    }}
                />
                <button
                    type="submit"
                    onClick={this.handleClick}
                >
                    Submit
                </button><br/>
                {
                    this.state.click ? (
                        <p>{this.state.text}</p>
                    )
                    : (
                        <></>
                    )
                }
                
            </>
        )
    }
}

export default Event;