import React from "react";

export default class Coundown extends React.Component{
    constructor(props){
        super(props);
        this.state={value: this.props.value} //get value from prop  
        var interval = setInterval(()=>{    //arrow function doesn't have (this)
            if(this.state.value>0)      //work when value bigger than 0
                this.setState({value: this.state.value - 1});      
            else                        //when value is <= 0 clearInterval
                clearInterval(interval);
        }, 1000)
    }
    render(){
        return(
            <div>
                {this.state.value}
            </div>
        )
    }
}