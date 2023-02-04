import React from "react";

class Controll_from extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: 'hello'
        }
    }
    handleChange=(event)=>{
        this.setState({name: event.target.value});
    }
    handleSubmit=(event)=>{
        if(this.state.name=='Java'){
            alert("Congrats you input correct...!");
        }else{
            alert("Please input (Java)");
        }
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input 
                        type="text" 
                        defaultValue={this.state.name} 
                        onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </label>
            </form>
            <p>You Input: {this.state.name}</p>  

            </>
        )
    }
}

export default Controll_from;