import React, { Component } from 'react'
import {ChildComponent, ChildComponent1} from './ChildComponent'

class ParentComponent extends Component {
  constructor(){
    super()
    this.state = {
        message: 'Hello '
    }
    this.greetFunction = this.greetFunction.bind(this)
    this.greetFunction1 = this.greetFunction1.bind(this)
  }
  greetFunction() {
    alert(`${this.state.message} World`)
  }

  greetFunction1(name) {
    alert(`${this.state.message} ${name}`)
  }

    render() {
            return (
      <div>
        <ChildComponent greetHandler = {this.greetFunction}/>
        <ChildComponent1 greetHandler1 = {this.greetFunction1}/>
      </div>
    )
  }
}

export default ParentComponent