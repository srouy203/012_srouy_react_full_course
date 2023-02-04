import React, { Component } from 'react'

class PrevState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: 0
      }
    }
    
    handleCount = () => {
        this.setState((prevState)=>{
          return{
            value: prevState.value + 1
          }
        })
    }

  render() {
    return (
      <div>
        <button onClick={this.handleCount}>Count {this.state.value}</button>
      </div>
    )
  }
}

export default PrevState
