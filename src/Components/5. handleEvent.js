import React from "react";

export default class Handle extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {data: 'Input text'};
    // }
    state = {
        data: "Input Text Hello",
        click: false
    }

    // handleEvent=()=>{
    //     this.handleEvent=this.handleEvent.bind(this);
    // }

    click = (e) => {
        this.setState({click: !this.state.click});
    }
    render(){
        return(
            <>
                <h2>This is a example of handleEvent</h2>
                <input 
                    type="text"
                    value={this.state.data}
                    onChange ={e => {
                        this.setState({data: e.target.value});
                    }}
                />
                <button
                    type="button"
                    onClick={this.click}
                    children="Login"
                />
                {
                    this.state.click ? (
                        <>
                        </>
                    ) : (
                        <p>{this.state.data}</p>
                    )
                }
                
            </>
        )
    }
}
