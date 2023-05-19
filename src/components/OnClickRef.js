import React, { Component } from 'react'

class OnClickRef extends Component {

    constructor() {
        super()
        this.inpRef = React.createRef()
    }

    clickHandler = () => {
        this.inpRef.current.focus()
        console.log(this.inpRef)
    }
  
  render() {
    return (
      <div>
        {/* First way to higlight text field */}
        <input type='text' ref={this.inpRef}/>
        
        <button onClick={this.clickHandler}>Higlight input text field</button>
      </div>
    )
  }
}

export default OnClickRef