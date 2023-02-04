import React, { Component } from 'react'

export class UseEffectClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: 0,
         name: ""
      }
    }
    componentDidMount(){
        document.title = `You click ${this.state.value} times`
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.value !== this.state.value){
        console.log("Update document title");
        document.title = `You click ${this.state.value} times`
      }
    }
    handleClick = () => {
        this.setState((prev)=>{
            return{
                value: prev.value + 1
            }
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>You clicked {this.state.value} times</p>
        <input 
          type="text" 
          value={this.state.name}  
          onChange={(e)=>{this.setState({name: e.target.value})}}
        />
      </div>
    )
  }
}

export default UseEffectClass