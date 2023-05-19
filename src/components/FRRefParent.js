import React, { Component } from 'react'
import FRChildRef from './FRChildRef'

class FRRefParent extends Component {

    constructor() {
        super()
        this.inpRef = React.createRef()
    }

     clickHandler = () => {
        this.inpRef.current.focus()
    }
  
  render() {
    return (
      <div>
        <FRChildRef ref={this.inpRef}/>
        <button onClick={this.clickHandler}>Highlight text field 3</button>
      </div>
    )
  }
}

export default FRRefParent