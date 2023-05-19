import React, { Component } from 'react'

class PropStateClassChange extends Component {
    render() {
        const {name, shortName} = this.props
        return (
        <div>    
        <h1>{name} aka {shortName}</h1>
        
        </div>
        )
    }
}

export default PropStateClassChange