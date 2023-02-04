import React from 'react'
import { useState } from 'react'
import UseEffectmouseover from './5.2 UseEffect mouseover'
function UseEffectContainerOfMouseover() {
    const [show, setShow] = useState(true)
  return (
    <div>
        <button onClick={()=>{setShow(!show)}}>Toggle show</button>
        {show ? <UseEffectmouseover/> : <> </>}
    </div>
  )
}

export default UseEffectContainerOfMouseover




