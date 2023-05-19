import React, { Component } from 'react'
import withCounter from './withCounter'

class MouseHover extends Component {
  
    render() {
        const {increamentCounter, count} = this.props
    return( 
    <div>
        <div onMouseOver={increamentCounter}>Counter {count} </div>
    </div>    
    )

  }
}

export default withCounter(MouseHover)