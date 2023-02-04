import React, { useCallback, useState } from 'react'
import Title from './11.1 Title'
import Count from './11.3 Count'
import Button from './11.2 Button'
function UseCallback() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(500)

    const increaseAge = useCallback (() => {
        setAge(age + 1)
    },[age])
    //function increaseAge render only when age is change

    const increaseSalary = useCallback(() => {
        setSalary(salary + 100)
    },[salary])
    //function increaseSalary render only when salary is change
  return (
    <div>
        <Title title="Title"/>
        <Count text="Age" state={age}/>
        <Button handle={increaseAge}>IncreaseAge</Button>
        <Count text="Salary" state={salary}/>
        <Button handle={increaseSalary}>IncreaseSalary</Button>
    </div>
  )
}

export default UseCallback
