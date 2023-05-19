import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
            message: 'XYZ'
          })}, 2000)
        }



  render() {
    console.log('*********************** PARENT COMPONENT **************************')

    return (
      <div>
        Parent Component
        <RegComp name={this.state.message}/>
        <PureComp name={this.state.message}/>
        </div>
    )
  }
}

export default ParentComp