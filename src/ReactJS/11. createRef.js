import React, { Component } from 'react'

class CreateRef extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef(); 
    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    
    handleRef = () =>{
        alert(`${this.inputRef.current.value}`)
    }


  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} placeholder="inputRef"/>
        <button onClick={this.handleRef}>Submit</button>
      </>
    )
  }
}

export default CreateRef;
