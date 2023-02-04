import React from 'react'
import Count from './5.1 Count'
import store from './5. Redux/store'
import { Provider } from 'react-redux'
function Connect() {
  return (
    <Provider store={store}>
        <div>
            <Count/>
        </div>
    </Provider>
  )
}

export default Connect
