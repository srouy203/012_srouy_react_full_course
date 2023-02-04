import React from 'react'
import CrudApp from './crudApp'
import { Provider } from 'react-redux'
import store from './Redux/store/store'

const CrudIndex = () => {
  return (
    <div>
      <Provider store={store}>
        <CrudApp/>
      </Provider>
    </div>
  )
}

export default CrudIndex
