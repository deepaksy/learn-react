import React, { Component } from 'react'

export class ClassProps extends Component {
  render() {
    return (
      <div>
      {this.props.name}'s profession is  {this.props.profession}
      </div>
    )
  }
}

export default ClassProps