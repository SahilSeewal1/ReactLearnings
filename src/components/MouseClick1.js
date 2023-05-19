import React, { Component } from 'react'
import withCounter1 from './withCounter1'

class MouseClick1 extends Component {

    render() {
    
        const {increamentCounter, count, name} = this.props
    
    return( 
    <div>
        <button onClick={increamentCounter}>{name} Counter {count} </button>
    </div>    
    )

  }
}

// Passing parameters to Higher order counter function
export default withCounter1(MouseClick1, 5)