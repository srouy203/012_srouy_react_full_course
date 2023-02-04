import React from 'react'
import { UserContext, SexContext } from './7. Context'
function ContextcomB() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <SexContext.Consumer>
                            {
                                sex => {
                                    return(
                                        <h2>Hello: {user} Gender: {sex}</h2>
                                    )
                                }
                            }
                        </SexContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ContextcomB
