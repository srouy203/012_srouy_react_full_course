import React from 'react'

const ChildrenProps = (props) => {
  return (
    <div>
        <button onClick={()=>props.handle('CHILD')}>Click me</button>
    </div>
  )
}

export default ChildrenProps
