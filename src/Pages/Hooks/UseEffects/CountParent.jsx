import React, { useEffect, useState } from 'react'
import Counter from './Counter'

const CountParent = () => {
  console.log(`CountParent Rendered`);
    const [count,setCount] = useState(0)
    useEffect(()=>{

    },[count])
  return (
    <div>
        <Counter count={count}/>
        <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
    </div>
  )
}

export default React.memo(CountParent)