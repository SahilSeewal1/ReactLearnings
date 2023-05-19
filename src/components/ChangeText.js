import React, { Component } from 'react'

class ChangeText extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hit button to subscribe'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Successfully subscribed'
        })
    }

    render() {
        return (
        <div>    
        <h1>{this.state.message}</h1>
        <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
        </div>
        )
    }
}

export default ChangeText