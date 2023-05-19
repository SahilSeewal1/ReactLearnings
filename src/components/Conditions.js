import React, { Component } from 'react'

class Conditions extends Component {
  constructor() {
    super()
    this.state = {
        isLoggedIn1: true,
        isLoggedIn2: false,
        isLoggedIn3: true,
        isLoggedIn4: true
    }
  }
    render() {
        if(this.state.isLoggedIn1){return (<div>Successfully LogedIn</div>)}
        else{return (<div>Please Log In</div>)}

        let message
        if(this.state.isLoggedIn2){message = <div>Successfully LogedIn</div>}
        else{message = <div>Please Log In</div> }
        return message

        return this.state.isLoggedIn3 ?
           <div>Successfully LogedIn</div>:
           <div>Please Log In</div>

        return this.state.isLoggedIn4 && <div>Successfully LogedIn</div> 
  }

}

export default Conditions