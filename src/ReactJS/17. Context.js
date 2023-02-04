import React, { Component } from 'react'
import ComA from './17.2 ComA'
import { UserProvider } from './17.1 UserContext'

export class Context extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Mam Vannda">
            <ComA/>
        </UserProvider>
      </div>
    )
  }
}

export default Context
