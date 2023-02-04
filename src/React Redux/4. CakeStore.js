import React from 'react'
import CakeContainer from './4.1 CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/1. store'
import CakeContainerHook from './4.2 CakeContainerHook'
import CandyContainer from './4.3 CandyContainer'
import CandyContainerHook from './4.4 CandyContainerHook'
import CakeContainerPayload from './4.5 cakeContainerPayload'
import CandyContainerHookPayload from './4.6 CandyContainerHookPayload'
import MapStateToPropsWithCondition from './4.7 MapStateToPropsWithCondition'

function CakeStore() {
  return (
    <Provider store={store}>
        <CakeContainer/>
        <CakeContainerHook/>
        <CandyContainer/>
        <CandyContainerHook/>
        <CakeContainerPayload/>
        <CandyContainerHookPayload/>

        <MapStateToPropsWithCondition  cake/>
        <MapStateToPropsWithCondition/>
    </Provider>
  )
}

export default CakeStore
