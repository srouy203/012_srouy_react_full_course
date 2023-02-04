import React, { useState } from 'react'
import useInput from './16.1 useInput'

function CustomForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    
    const [firstName, bindFristname, resetFristName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${firstName} ${lastName}`)
        resetFristName();
        resetLastName();
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Firstname: </label>
                <input
                    type="text" 
                    {...bindFristname}
                /> 
            </div>
            <div>
                <label htmlFor="">Lastname: </label>
                 <input
                    type="text" 
                    {...bindLastName}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CustomForm
