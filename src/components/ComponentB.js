import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './Contexts'

class ComponentB extends Component {
static contextType = UserContext

render() {
    return (
      <div>
        I am {this.context}
        <ComponentC/>
        </div>
    )
  }
}

// ComponentC.contextType = UserContext

export default ComponentB