import React, { Component } from 'react'
import ChildrenProps from './5.1 Children'
class MethodAsProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: "PARENT",
      }
    this.handleAlert = this.handleAlert.bind(this);
    }
    
    handleAlert (child) {
        alert(`Parent value: ${this.state.value} from ${child}`)
    }

  render() {
    return (
      <>
        <ChildrenProps handle={this.handleAlert}/> 
      </>
    )
  }
}

export default MethodAsProps; 
