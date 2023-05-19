import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp1 extends Component {
  

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
        // Memo Component
        <div>
            <MemoComp name = {this.state.message} />
        </div>
    )
  }
}

export default ParentComp1