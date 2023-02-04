import React, { useContext } from 'react'
import { CountContext } from './9. Reducer with Context'

function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>
      <button onClick={()=> countContext.countDispatch('increase')}>Increase</button>
      <button onClick={()=> countContext.countDispatch('decrease')}>Decrease</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
