import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function FetchingData() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                console.log(res.data)
                setPosts(res.data)
            })
            .catch((err)=>{
                console.log(err)
                
            })
    },[])
  return (
    <div>
      <ul>
        {
            posts.map(val=>{
                return(
                    <li key={val.id}>{val.title}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default FetchingData
