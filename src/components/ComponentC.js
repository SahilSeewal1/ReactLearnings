import React, { Component } from 'react'
import { UserConsumer, UserConsumer2 } from './Contexts'

class ComponentC extends Component {
  render() {
    return (

        <UserConsumer2>
        { username1 => (
            <UserConsumer>
            { username => (
                <div>Hello {username} {username1}</div>
                )}
            </UserConsumer>           
        )}  
      </UserConsumer2>
    )
  }
}

export default ComponentC