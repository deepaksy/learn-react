import React from 'react'

const Child = ({onclick}) => {
    console.log("Child rendered")
  return (
    <div>
    <button onClick={()=>onclick(prev=>prev+1)}>
    click to increment
    </button>
    </div>
  )
}

export default React.memo(Child)