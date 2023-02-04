import React, { useContext } from 'react'
import ContextcomB from './7.2 Context comB'
import { UserContext, SexContext } from './7. Context'

function ContextcomA() {
    const user = useContext(UserContext)
    const gender = useContext(SexContext)
  return (
    <div>
        <h2>{user} - {gender}</h2>
        {/* <ContextcomB/> */}
    </div>
  )
}

export default ContextcomA
