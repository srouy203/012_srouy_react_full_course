import React from 'react'

function Button({handle, children}) {
    console.log(`Render ${children}`)
  return (
    <div>
      <button onClick={handle}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
// export default Button
