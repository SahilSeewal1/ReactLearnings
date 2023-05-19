import React, { Component } from 'react'
import withCounter from './withCounter'

class MouseClick extends Component {

    render() {
    
        const {increamentCounter, count} = this.props
    
    return( 
    <div>
        <button onClick={increamentCounter}>Counter {count} </button>
    </div>    
    )

  }
}

export default withCounter(MouseClick)