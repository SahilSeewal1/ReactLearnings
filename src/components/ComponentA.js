import React, { Component } from 'react'
import ComponentB from './ComponentB'
import { UserProvider, UserProvider2 } from './Contexts'

class ComponentA extends Component {
  render() {
    return (
      <div>
        <UserProvider2 value='123'>        
            <UserProvider value='ABC'>
                <ComponentB/>
            </UserProvider>
        </UserProvider2>
      </div>
    )
  }
}

export default ComponentA