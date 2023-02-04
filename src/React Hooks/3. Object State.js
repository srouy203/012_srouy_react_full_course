import React, { useState } from 'react'

function ObjectState() {
    const [title, setTitle] = useState(
        {
            fistTitle: "",
            lastTitle: ""
        }
    )
    
  return (
    <div>
      <input 
        type="text" 
        value={title.fistTitle}
        onChange={e => setTitle({...title, fistTitle: e.target.value})}
        />
        <input 
        type="text" 
        value={title.lastTitle}
        onChange={e => setTitle({...title, lastTitle: e.target.value})}
        />

        <h3>FistTitle: {title.fistTitle} LastTitle: {title.lastTitle}</h3>
        <h3>{JSON.stringify(title)}</h3>

    </div>
  )
}

export default ObjectState
