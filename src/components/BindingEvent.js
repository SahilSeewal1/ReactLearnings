import React, { Component } from 'react'

class BindingEvent extends Component {
    constructor(props){
    super(props)
    this.state = {
        message1: 'Change my state',
        message2: 'Change my state',
        message3: 'Change my state',
        message4: 'Change my state'
    }

    this.changeState4 = this.changeState4.bind(this)
  }

  changeState1() {
    console.log(this)

    this.setState({
        message1: 'State Changed!'
    },()=>{
        console.log(this)
    })
  }

  changeState2 = () => {
    this.setState({
        message2: 'State Changed!'
    },()=>{
        console.log(this)
    })
  }

  changeState3() {
    console.log(this)

    this.setState({
        message3: 'State Changed!'
    },()=>{
        console.log(this)
    })
  }

  changeState4() {
    console.log(this)

    this.setState({
        message4: 'State Changed!'
    },()=>{
        console.log(this)
    })
  }


    render() {
    return (
      <div>
        <div>{this.state.message1}</div>
        <button onClick={this.changeState1.bind(this)}>Click me!</button>

        <div>{this.state.message2}</div>
        <button onClick={this.changeState2}>Click me!</button>

        <div>{this.state.message3}</div>
        <button onClick={() => this.changeState3()}>Click me!</button>

        <div>{this.state.message4}</div>
        <button onClick={this.changeState4}>Click me!</button>

      </div>
    )
  }
}

export default BindingEvent