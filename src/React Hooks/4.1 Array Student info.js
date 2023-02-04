import React, { useState } from 'react'

function ArrayStudentinfo() {
    const [student, setStudent] = useState([])
    const [nameTest, setNameTest] = useState("")
    const [sexTest, setSexTest] = useState("")

    const handleName = (e) => {
        setNameTest(e.target.value)
    }
    const handleSex = (e) => {
        setSexTest(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStudent([...student, {
            id: student.length,
            name: nameTest,
            sex: sexTest
            }
        ])
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                Name:
                <input 
                    type="text" 
                    value={nameTest}
                    onChange={handleName}
                />
            </div>
            <div>
                Sex:
                <input 
                    type="text" 
                    value={sexTest}
                    onChange={handleSex}
                />
            </div>
            <button type="submit">Submit</button>
        </form>

        {
            student.map((val)=>{
                return(
                    <p key={val.id}>{val.id}. {val.name} {val.sex}</p>
                )
            })
        } 
    </div>
  )
}

export default ArrayStudentinfo
