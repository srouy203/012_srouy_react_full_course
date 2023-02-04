import React, { PureComponent } from 'react'

class Purecomponent extends PureComponent {

  constructor(props) {
    super(props)
  
    this.state = {
       name: "hello"
    }
  }
  
  componentDidMount () {
    setInterval(()=>{
      this.setState({
        name: "hello"
      },()=>{
        console.log(this.state.name);
      })
    },1000)
  }

  render() {
    return (
      <>
        <h1>Purecomponent</h1>
      </>
    )
  }
}

export default Purecomponent
