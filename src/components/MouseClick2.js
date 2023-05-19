import React, { Component } from 'react'

class MouseClick2 extends Component {

    render() {
    
        const {increamentCounter, count} = this.props
    
    return( 
    <div>
        <button onClick={increamentCounter}>Counter {count} </button>
    </div>    
    )

  }
}

export default MouseClick2