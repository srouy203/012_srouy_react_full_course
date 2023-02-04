import React, { useState } from 'react'
import { useMemo } from 'react'

function UseMemo() {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)

    const IncreaseOne = () => {
        setOne((prev)=> prev + 1)
    }
    const IncreaseTwo = () => {
        setTwo((prev)=> prev + 1)
    }

    const even = useMemo(() => {
        let i=0
        while(i<909900102) i++
        return one % 2 == 0
    },[one])

    //invoke the provided function and cashes its result

  return (
    <div>
      <button onClick={IncreaseOne}>IncreaseOne {one}</button>
        <span>{even ? "Even" : "Odd"}</span>
      <button onClick={IncreaseTwo}>IncreaseTwo {two}</button>
    </div>
  )
}

export default UseMemo
