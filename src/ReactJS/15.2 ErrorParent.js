import React, { Component } from 'react'
import ErrorChild from './15,1 ErrorChild'
import ErrorBoundary from './15. ErrorBoundary'
class ErrorParent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
            <ErrorChild person="Kheiv Dara"/>
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorChild person="Am hannah"/>
        </ErrorBoundary>
        <ErrorBoundary>    
            <ErrorChild person="Vathana"/>
        </ErrorBoundary>
        <ErrorBoundary>    
            <ErrorChild person="Meas Hannah"/>
        </ErrorBoundary>
      </div> 
    )
  }
}

export default ErrorParent
