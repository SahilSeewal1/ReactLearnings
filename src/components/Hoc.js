import React, { Component } from 'react'
import MouseClick1 from './MouseClick1'
import MouseHover1 from './MouseHover1'

class Hoc extends Component {
  render() {
    return (
      <div>
        {/* Passing props - name to MouseClick1*/}
        <MouseClick1 name='XYZ'/>
        <MouseHover1/>
      </div>
    )
  }
}

export default Hoc