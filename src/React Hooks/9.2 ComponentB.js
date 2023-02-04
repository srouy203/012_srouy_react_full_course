import React, { useContext } from 'react'
import { CountContext } from './9. Reducer with Context'
function ComponentB() {
  const {countState} = useContext(CountContext)
  return (
    <div>
      {countState}
      
    </div>
  )
}

export default ComponentB
