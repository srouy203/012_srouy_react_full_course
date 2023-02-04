import React from 'react'
import { useState } from 'react'
import ListChild from './7.1 ListChild'
const List = () => {
    const [person, setPerson] = useState(
        [
            {
                id: 1,
                name: "Ang leangSrouy",
                sex: "Male",
                age: 20
            },
            {
                id: 2,
                name: "Hannah",
                sex: "Famale",
                age: 30
            },
            {
                id: 3,
                name: "Nong D avid",
                sex: "Male",
                age: 18
            }
         ]
    )
  return (
    <div>
        {
            person.map((item, index)=>{
                return(
                    <ListChild info={item} />
                )
            })
        }
    </div>
  )
}

export default List;
