import { useState } from "react"

function useCounter(initialState = 0, value) {
    const [count, setCount] = useState(initialState)
    const increaseCount = () => {
        setCount(p => p + value)
    }
    const decreaseCount = () => {
        setCount(p => p - value)
    }
    const resetCount = () => {
        setCount(initialState)
    }

    return [count, increaseCount, decreaseCount, resetCount];
}

export default useCounter
