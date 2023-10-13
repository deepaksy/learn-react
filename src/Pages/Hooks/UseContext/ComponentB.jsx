import React, { useContext } from 'react'
import {context} from './getContext'
const ComponentB = () => {
    const data = useContext(context)
  return (
    <div>
        data recieved: {data}
    </div>
  )
}

export default ComponentB