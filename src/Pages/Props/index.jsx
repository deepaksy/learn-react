import React from 'react'
import FunctionalProps from './FunctionalProps'
import ClassProps from './ClassProps'

const index = () => {
  return (
    <div>
    <FunctionalProps name="Bruce" heroname="Batman"/>
    <FunctionalProps name="Clark" heroname="Superman"/>
    <FunctionalProps name="Diana" heroname="Wonder Women"/>
    <ClassProps name="Deepak" profession="engineer"/>
    </div>
  )
}

export default index