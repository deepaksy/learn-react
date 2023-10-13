import React, { useEffect } from 'react'

const Counter = ({count}) => {
  useEffect(()=>{
    document.title = `Count ${count} times`
  },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default Counter