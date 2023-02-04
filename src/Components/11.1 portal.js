import React from "react";
import ReactDOM from "react-dom";

export default class Port extends React.Component{
    render(){
        return this.props.open
        ? ReactDOM.createPortal(
            <>
                <div>Hello</div>
                <button 
                    type='button'
                    children="Close"
                    onClick={this.props.onClose}
                />
            </>
            ,
            document.getElementById("root1")
        )
        :null;
    }
}