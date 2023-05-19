import React, { Component } from 'react'

class PropsClass extends Component {
    render() {
        return (
        <div>    
        <h1>Component Class</h1>
        {this.props.name}
        </div>
        )
    }
}

export default PropsClass