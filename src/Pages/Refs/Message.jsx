import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            value:''
        }
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }

    changeHandler(){
        console.log('first')
    }
  render() {
    return (
      <div style={{
        alignItems:'center',
        textAlign:'center'
      }}>
      {this.state.value}
      <input ref={this.inputRef} onChange={this.changeHandler} type='text' placeholder='username' name='username'/>
      </div>
    )
  }
}

export default Message