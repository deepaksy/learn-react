import React from 'react'
import Message from './Message'
import FocusInput from './FocusInput'
import FRParentInput from './FRParentInput'

const Refs = () => {
  return (
    <div>
    <h1>Refs in React</h1>
    <Message/>
    <section>
    <h2>Refs with Class Components</h2>
    <FocusInput/>
    </section>
    <section>
    <h2>Forwarding Refs</h2>
    <FRParentInput/>
    </section>
    </div>
  )
}

export default Refs