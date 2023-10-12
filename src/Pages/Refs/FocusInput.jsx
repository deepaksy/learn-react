import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }

    handleClick = () =>{
        this.componentRef.current.focusInput()
    }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Focus Input</button>
        <Input ref={this.componentRef}/>
      </div>
    )
  }
}

export default FocusInput