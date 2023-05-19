import React from 'react'

const withCounter1 = (WrappedComponent1, increamentCount) => {
    class WithCounter1 extends React.Component {
        constructor() {
            super()    
            this.state = {
               count: 0
            }
          }
    
        increamentCounter = () => {
            this.setState(prevCount => {
                return { count: prevCount.count + increamentCount }
            })
        }
        
        render() {
            return (
                <WrappedComponent1
                count = {this.state.count}
                increamentCounter = {this.increamentCounter}
                {...this.props}/>
            )
        } 
    }
    return WithCounter1
}

export default withCounter1