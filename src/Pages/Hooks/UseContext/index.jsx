import React from 'react'
import {Provider} from './getContext'
import ComponentA from './ComponentA'

const UseContext = () => {
  return (
    <div>
        <Provider value='Deepak'>
            <ComponentA/>
        </Provider>
    </div>
  )
}

export default UseContext