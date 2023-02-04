import React from 'react'

function Count({text, state}) {
  console.log(`Render ${text}`)
  return (
    <div>
        <p>{text}: {state}</p>
    </div>
  )
}

export default React.memo(Count)
