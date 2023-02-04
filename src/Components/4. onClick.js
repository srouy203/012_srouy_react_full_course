import React from "react";

class Onclick extends React.Component{
    constructor(props){
        super(props);
        this.state = {num: 3};
    }
    onClick =()=>{
        this.setState({num: this.state.num + 1});
    }
    render(){
        return(
            <>
                <button 
                    type="button"
                    onClick={this.onClick}
                    children="Press"
                />
                <p>Value is: {this.state.num}</p>
            </>
        )
    }
}
export default Onclick;