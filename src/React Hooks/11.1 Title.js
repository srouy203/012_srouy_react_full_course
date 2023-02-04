import React from 'react'

function Title({title}) {
  console.log(`Render ${title}`)
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

export default React.memo(Title)
