import { useState } from 'react'
import './index.css'

const UseStates = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h3>Value of count - {count}</h3>
        <div style={{
            display:'flex',justifyContent:'center',alignItems:'center'
        }}>
        <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
        <button onClick={()=>setCount(prev=>prev-1)}>decrement</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </div>
    </div>
  )
}

export default UseStates