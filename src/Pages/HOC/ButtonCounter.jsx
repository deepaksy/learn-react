import React from 'react'
import WithCounter from './withCounter'

const ButtonCounter = (props) => {
    const {count,incrementCount} = props;
  return (
    <div>
        <button onClick={()=>incrementCount()}>Count - {count}</button>
    </div>
  )
}

export default WithCounter(ButtonCounter)