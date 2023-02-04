import React from "react";

class SetState extends React.Component{
    state = {value: 1}

    Click=()=>{
        this.setState({value: this.state.value +1});
    }
    render(){
        return(
            <>
                <h1>Hello</h1>
                <button
                    type="button"
                    onClick={this.Click}
                >Click me</button>
                <p>value is: {this.state.value}</p>
            </>
        )
    }
}

export default SetState;