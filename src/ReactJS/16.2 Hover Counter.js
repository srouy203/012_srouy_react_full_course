import React, { Component } from 'react'
import UpdateComponent from './16. Higher Order Com'

class HoverCounter extends Component {

  render() {
    const {count, handleCount} = this.props
    console.log(count)
    return (
      <div>
        <h3 onMouseOver={handleCount}>Hover {count} times</h3>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter, 2);
