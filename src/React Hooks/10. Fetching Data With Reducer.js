import React, { useEffect, useState } from 'react'

import useFetch from './10.1 useFetch'
function FetchingDataWithReducer() {
  
    const [posts, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  return (
    <div>
      {
        loading ? "Loading" : posts.title
      }
      {
        error ? error : null
      }
    </div>
  )
}

export default FetchingDataWithReducer
