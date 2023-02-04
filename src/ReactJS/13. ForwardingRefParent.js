import React, { Component } from 'react'
import ForwardingRefChild from './13.1 ForwardingRefChild'
class ForwardingRefParent extends Component {
  constructor(props) {
    super(props)
  
    this.ref = React.createRef();
  }
  handleFocus = () => {
    this.ref.current.focus();
  }
  
  render() {
    return (
      <>
        <ForwardingRefChild ref={this.ref}/>
        <button onClick={this.handleFocus}>Focus</button>
      </>
    )
  }
}

export default ForwardingRefParent
