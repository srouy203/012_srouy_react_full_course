import React, { Component } from "react";

class PropsChild extends Component{
    render(){
        const {title, children} = this.props
        return(
            <>
                <h1>{title}</h1>
                {children}
            </>
        )
    }
}

export default PropsChild;