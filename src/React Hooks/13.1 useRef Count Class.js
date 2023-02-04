import React, { Component } from 'react'

export class UseRefCountClass extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    componentDidMount(){
        console.log('setInterval')

        this.interval = setInterval(()=>{
            this.setState(prev=>({
                count: prev.count + 1
            }))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>clearInterval(this.interval)}>Stop count</button>
        Class Count: {this.state.count}
      </div>
    )
  }
}

export default UseRefCountClass
