import React, { Component } from 'react'

export class ClassClick extends Component {
  clickMe() {
    console.log('Class button clicked')
  }
    render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click me</button>
        </div>
    )
  }
}

export default ClassClick