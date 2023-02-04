import React, { useState } from 'react'

function ArrayState() {
    const [value, setValue]= useState([])

    const handleAdd = () => {
        setValue([...value, 
            {
                id: value.length,
                num: Math.floor(Math.random() * 10 ) + 1
            }   
        ])
        
    }
    
  return (
    <div>
        <button onClick={handleAdd}>Add new num</button>
        <ul>
            {
                value.map((val)=>{
                    return(
                        <li key={val.id}>{val.num}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ArrayState
