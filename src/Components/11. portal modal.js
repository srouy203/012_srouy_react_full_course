import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalStyle = {
    position: 'fixed',
    top:0, left:0, right:0, buttom: 0,
    background: 'rgba(0,0,0,0.5)'
    },
    modalInner={
        background: 'white',
        borderRadius: 7.5,
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 10,
        paddingTop: 2.5,
    },
    modalX={
        textAlign: 'right',
        borderBottom: '1px solid lightgray',
        marginBottom: 10,
        cursor: 'pointer'
    }

export default class Modal extends Component{
    render(){
        return this.props.open
        ? ReactDOM.createPortal(
            <div style={modalStyle}>
                <div style={modalInner}>
                    <div style={modalX} 
                    onClick={this.props.onClose}
                    >&times;
                    </div>
                    {this.props.children}    
                </div>
                
            </div>,
            document.body
        )
        : null;
    }
}