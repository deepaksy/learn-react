import React, { useState } from 'react'
import Child from './Child'

const Memo = () => {
  const [count,setCount] = useState(0)
  console.log("Memo rendered")
  return (
    <div>
    {count}
    <br/>
    <Child onclick={setCount}/>
    </div>
  )
}

export default Memo