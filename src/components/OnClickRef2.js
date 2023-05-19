import React, { Component } from 'react'
import FocusInput from './FocusInput'

class OnClickRef2 extends Component {

    constructor() {
        super()
        this.inpRef = React.createRef()
    }

    clickHandler = () => {
        this.inpRef.current.focusInput()
        console.log(this.inpRef)
    }
  
  render() {
    return (
      <div>
        {/* Second way to higlight text field */}  
        <FocusInput ref={this.inpRef}/>
        <button onClick={this.clickHandler}>Higlight input text field 2</button>
      </div>
    )
  }
}

export default OnClickRef2