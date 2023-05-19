import React, { Component, createRef } from 'react'

class FocusInput extends Component {

    constructor(){
        super()
        this.inputReference = React.createRef()
    }

    focusInput() {
        this.inputReference.current.focus()
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputReference}/>
      </div>
    )
  }
}

export default FocusInput