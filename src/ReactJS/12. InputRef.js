import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
      super(props)
    
      this.InputRef = React.createRef();
    }
    focusInput(){
        this.InputRef.current.focus()
    }

  render() {
    return (
      <>
        <input type="text" ref={this.InputRef}/>
      </>
    )
  }
}

export default InputRef
