import React, { Component } from 'react'
import withCounter1 from './withCounter1'

class MouseHover1 extends Component {
  
    render() {
        const {increamentCounter, count} = this.props
    return( 
    <div>
        <div onMouseOver={increamentCounter}>Counter {count} </div>
    </div>    
    )

  }
}

// Passing parameters to Higher order counter function
export default withCounter1(MouseHover1, 10)