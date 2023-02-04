import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const REQUEST = "REQUEST";
const FETCHING_SUCCESS = "FETCHING_SUCCESS";
const FETCHING_FAIL = "FETCHING_FAIL";

const initialState = {
  loading: false,
  data: [],
  error: ""
}

const request = () => {
  return{
    type: REQUEST,
  }
}
 
const fetching_fail = (error) => {
  return{
    type: FETCHING_FAIL,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCHING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    case FETCHING_FAIL: 
      return {
        loading: false,
        data: [],
        error: action.payload
      }
  }
}

const fetchData = () => {
  return function (dispatch){
    dispatch(request()); 
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch(fetching_success(res.data));
      })
      .catch(error => {
        dispatch(fetching_fail(error.massage))
      })
  }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchData())
 


function AsyncAction() {
  return (
    <div>
      <h1>Async action</h1>
    </div>
  )
}

export default AsyncAction
