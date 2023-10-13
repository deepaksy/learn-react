import React from 'react'
import ElementA from './ElementA'
import { UserProvider } from './useContext'
const Context = () => {
  
  return (
    <div>
        <h1>Context in React</h1>
        <p>Context provides a way to pass data through the component tree witout having to pass props down manually at every level.</p>
        <UserProvider >
        <ElementA/>
        </UserProvider>
    </div>
  )
}

export default Context