import React, { Component } from 'react'

export class Binding extends Component {
    constructor(props){
        super(props)
      
        this.state = {
           value: 0,
        }

      }
    Increase = () => {
        this.setState({
            value: this.state.value + 1,
        },()=>{
            console.log("CallBack value: ", this.state.value);
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button
            // onClick={this.Increase.bind(this)}
            // onClick={()=>this.Increase()}
            // onClick={this.Increase}
            onClick={this.Increase}
        >
            Click Me to increase
        </button>
      </div>
    )
  }
}

export default Binding
