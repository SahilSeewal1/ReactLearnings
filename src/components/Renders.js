import React, { Component } from 'react'
import CommonCode from './CommonCode'
import MouseClick2 from './MouseClick2'
import MouseHover2 from './MouseHover2'

class Renders extends Component {
  render() {
    return (
      <div className ='App'>

        <CommonCode
        renders={(count, increamentCounter)=>{
            <MouseClick2 count={count} increamentCounter={increamentCounter}/>
        }}>
        </CommonCode>    
        
        <CommonCode
        renders={(count, increamentCounter)=>{
            <MouseHover2 count={count} increamentCounter={increamentCounter}/>
        }}>
        </CommonCode>      
      </div>
    )
  }
}

export default Renders