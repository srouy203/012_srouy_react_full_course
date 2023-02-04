import React, { Component } from 'react'
import { UserConsumer } from './17.1 UserContext'
export class ComB extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                name => {
                    return <h2>Hello {name}</h2>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComB
