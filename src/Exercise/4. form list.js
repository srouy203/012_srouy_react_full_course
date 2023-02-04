import React from 'react'
import { useState } from 'react'

function FormList() {
    const [value, setValue] = useState([])
    const [text, setText] = useState("")

    const handleAdd = () => {
        setValue([...value,{
            id: value.length,
            title: text
        }])
    }
    const handleDel = (id) => {
            const valueList = value.filter((val)=>val.id !== id)
            setValue(valueList);
    }
  return (
    <div>
        <input 
            type="text" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
      <button onClick={handleAdd}>Click Add</button>
    {
        value.map((val,index)=>{
            return(
                <div key={index}>
                    {val.title}
                    <button onClick={()=>handleDel(val.id)}>Delete</button>
                </div>
            )
        })
    }

    </div>
  )
}

export default FormList
