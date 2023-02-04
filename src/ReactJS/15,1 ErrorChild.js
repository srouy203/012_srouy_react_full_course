import React from 'react'

function ErrorChild({person}) {
    if(person === "Vathana")
        throw new Error('Not a person')
  return (
    <div>  
        {person}
    </div>
  )
}

export default ErrorChild
