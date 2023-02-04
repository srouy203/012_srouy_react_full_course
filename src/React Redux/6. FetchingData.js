import React from 'react'
import { Provider } from 'react-redux'
import store from './6. Redux/store'
import UserContainer from './6.1 UserContainer'
function FetchingData() {
  return (
    <Provider store = {store}>
        <UserContainer/>
    </Provider>
  )
}

export default FetchingData
