import React, { Component } from 'react'

class Counters extends Component {
    constructor() {
        super()    
        this.state = {
           count: 0
        }
      }

    counterClickHandler = () => {
        this.setState(prevCount => {
            return { count: prevCount.count + 1 }
        })
    }  
  
    render() {
    return( 
    <div>
        <button onClick={this.counterClickHandler}>Counter {this.state.count} </button>
        <div onMouseOver={this.counterClickHandler}>Counter {this.state.count} </div>
    </div>    
    )

  }
}

export default Counters