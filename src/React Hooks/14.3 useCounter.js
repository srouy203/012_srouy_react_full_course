
import { useEffect } from "react"
function useCounter(count) {
    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])
}

export default useCounter
