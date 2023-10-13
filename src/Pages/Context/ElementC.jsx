import React from 'react'
import { UserConsumer } from './useContext'

const ElementC = () => {
  return (
    <UserConsumer>
      {username=>{
        return(
          <div>
      Welcome - {username}
    </div>
        )
      }}
    </UserConsumer>
  )
}

export default ElementC