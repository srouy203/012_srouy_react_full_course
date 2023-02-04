import {useState, useEffect} from 'react'
import axios from 'axios'

function useFetch(link) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        axios
            .get(link)
            .then((res)=>{
                setPosts(res.data)
                setLoading(false)
                setError()
                console.log(res)
            })
            .catch((err)=>{
                setPosts([])
                setLoading(false)
                setError("Something went wrong!")
            })
    },[])

    return [posts, loading, error];
}

export default useFetch
