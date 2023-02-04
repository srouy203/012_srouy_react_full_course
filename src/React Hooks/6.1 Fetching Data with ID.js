import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchingDataWithID() {
    const [post, setPost] = useState("")
    const [id, setId] = useState(1)
    const [buttonId, setButtonId] = useState(1)
    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
            .then((res)=>{
                console.log(res)
                setPost(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[buttonId])

    const handleFetch = () => {
        setButtonId(id)
    }

  return (
    <div>
        <input 
            type="text" 
            value={id} 
            onChange={(e)=>setId(e.target.value)}
        />
        <button type='button' onClick={handleFetch}>Fetch Data</button>
      <h2>{post.title}</h2>
      
    </div>
  )
}

export default FetchingDataWithID
