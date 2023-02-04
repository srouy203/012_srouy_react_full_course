import React from 'react';
import { Component } from 'react';

class State extends Component{
    constructor(){
        super();
        this.state={
            title: "Hello Please Subscribe",
            button: "Subscribe",
            subscriber: 0,
        }
    }
    componentDidMount () {
        console.log("hello");
        this.handleClick ();
    }

    handleClick () {
        // this.setState( 
        //     {
        //         title: "Thank for subscribe",
        //         button: "Unsubscribe",
        //         subscriber : this.state.subscriber + 1,
        //     },
        //     () => {
        //         console.log('Calback Value: ', this.state.subscriber)
        //     }
        // )

        this.setState((prevState) => (
            {
                subscriber: prevState.subscriber + 1,
            }
        ),
            ()=>{
                console.log('CalLback value: ', this.state.subscriber);
            }
        )

        console.log(this.state.subscriber);
    }

    // handleClickSixTime () {
    //     this.handleClick();
    //     this.handleClick();
    //     this.handleClick();
    //     this.handleClick();
    //     this.handleClick();
    //     this.handleClick();
    // }

    
    render(){
        return(
            <>
                <h1>{this.state.title}, You have {this.state.subscriber}</h1>
                <button 
                    onClick={this.handleClick.bind(this)}
                >{this.state.button}</button>
            </>
        )
    }
}

export default State;