import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: ''
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentMounted')
    }

  render() {
    console.log('LifecycleA render')
    return (
      <div>LifecycleA </div>
    )
  }
}

export default LifecycleA
