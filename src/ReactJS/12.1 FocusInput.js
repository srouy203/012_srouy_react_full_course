import React, { Component } from 'react'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.Ref = React.createRef();
    }

    handleRef = () => {
        this.Ref.current.focus();
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.Ref}/>
        <button onClick={this.handleRef}>Click</button>
        
      </div>
    )
  }
}

export default FocusInput
