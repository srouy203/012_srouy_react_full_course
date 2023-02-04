import React, { Component } from 'react'
import UpdateComponent from './16. Higher Order Com'

class ClickCounter extends Component {
  render() {
    const {count, handleCount} = this.props
    console.log(count)
    return (
      <div>

        <button onClick={handleCount}>Click {count} times</button>
        
      </div>
    )
  }
}

export default UpdateComponent(ClickCounter, 1)
