import axios from 'axios'
import React, { useReducer } from 'react'
import { useEffect } from 'react'
const initialState = {
  posts:[],
  error: "",
  loading: true
}

 const reducer =(state, action) => {
    switch(action.type){
      case "FETCHING_SUCCESS":
        return{
          posts: action.payload,
          error: "",
          loading: false
        }
      case "FETCHING_FAIL":
        return{
          posts: [],
          error: "Something went wrong",
          loading: false
        }
      default:
        return state
    }
 }

function FetchingReducer() {
  const [person, dispatch] = useReducer(reducer, initialState)
  
  useEffect(()=>{
    document.title="Fetching Data";
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
        console.log(res)
        dispatch({type: "FETCHING_SUCCESS", payload: res.data})
      })
      .catch((err)=>{
        console.log(err)
        dispatch({type: "FETCHING_FAIL"})
      })
  },[])

  return (
    <div>
      {
        person.loading && "Loading..."
      }
      {
        person.posts.map((val)=>{
          return(
            <div key={val.id}>
              <p>{val.id} | {val.name} | {val.email}</p>
            </div>
          )
        })
      }
      {
        person.error? person.error : null
      }
    </div>
  )
}

export default FetchingReducer
