import React, { Component } from 'react'

class MouseHover2 extends Component {
  
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
export default MouseHover2