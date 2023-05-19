import React from 'react'

const withCounter = WrappedComponent => {
    class WithCounter extends React.Component {
        constructor() {
            super()    
            this.state = {
               count: 0
            }
          }
    
        increamentCounter = () => {
            this.setState(prevCount => {
                return { count: prevCount.count + 1 }
            })
        }
        
        render() {
            return (
                <WrappedComponent
                count = {this.state.count}
                increamentCounter = {this.increamentCounter}/>
            )
        } 
    }
    return WithCounter
}

export default withCounter