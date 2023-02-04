import React from "react";

export default class Select extends React.Component{
    state={value: ['Boy ','Dog ']};
    onChange=(e)=>{
        this.setState({ value: e.target.value })
    }
    render(){
        return(
            <>
                <select 
                    multiple size="4" 
                    defaultValue={this.state.value} 
                    onChange={this.onChange}>
                    <option>Appleeeeeeeeeee </option>
                    <option>Boy</option>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Egg</option>
                </select>
                <h3>You selected: {this.state.value}</h3>
            </>
        )
    }
}