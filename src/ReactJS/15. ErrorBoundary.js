import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    color = {
        color: 'red'
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true,
        }
    }
    componentDidCatch(error, info){
        console.log(error)   
        console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <p style={this.color}>Something went wrong....</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary
