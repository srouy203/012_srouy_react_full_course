import React from 'react'
import ContextcomA from './7.1 Context comA'

export const UserContext = React.createContext()
export const SexContext = React.createContext()
function Context() {
    
  return (
    <div>
        <UserContext.Provider value="Dara Sok">
            <SexContext.Provider value="Male">
                <ContextcomA/>
            </SexContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default Context

