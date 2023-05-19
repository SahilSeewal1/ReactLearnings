import React, {Component} from 'react'

class CommonCode extends Component {
        constructor() {
            super()    
            this.state = {
               count: 0
            }
          }
    
        increamentCounter = () => {
            this.setState(prevCount => {
                return { count: prevCount.count + 1}
            })
        }
         
        render() {
            return (
                <div>
                   {this.props.renders(this.state.count, this.increamentCounter)} 
                </div>
            )
        }
    }
    
export default CommonCode