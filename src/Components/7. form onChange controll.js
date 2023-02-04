import React from "react";

export default class Onchange extends React.Component{
    state={age: 10};
    onChange=(e)=>{
        if(e.target.valueAsNumber < 1000)
            this.setState({age: e.target.value});
    }
    render(){
        return(
            <>
                <input type="number" 
                    value={this.state.age}
                    onChange={this.onChange}
                />
                <p>Student age is: {this.state.age}</p>
            </>
        )
    }
}


