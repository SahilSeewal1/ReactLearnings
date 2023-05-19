import React, { Component } from 'react'

class UseSetState extends Component {

    constructor() {
        super()
        this.state = {
            count1: 0,
            count2: 0, 
            count3: 0,
            count4: 0
        }
    }

    changeCount1(){
        this.setState({
            count1: this.state.count1 + 1
        })
        console.log('Before update the count1 value ' + this.state.count1)
    }

    changeCount2(){
        this.setState({
            count2: this.state.count2 + 1
        },
        ()=>{console.log('Latest Count2 value ' + this.state.count2)}
        )
    }

    changeCount3(){
        this.setState({
            count3: this.state.count3 + 1
        },
        ()=>{console.log('Latest Count3 value ' + this.state.count3)
    })
    }

    bulkIncreament1(){
        this.changeCount3()
        this.changeCount3()
        this.changeCount3()
        this.changeCount3()
        this.changeCount3()
    }

    changeCount4(){
        this.setState(previousValue => ({
            count4: previousValue.count4 + 1
        }),
        ()=>{console.log('Current value ' + this.state.count4)}
        )
    }

    bulkIncreament2(){
        this.changeCount4()
        this.changeCount4()
        this.changeCount4()
        this.changeCount4()
        this.changeCount4()
    }

    render() {
        return (
        <div>    
        <h1>Count1 - {this.state.count1}</h1>
        <button onClick={()=>{this.changeCount1()}}>Increament Count1</button>

        <h1>Count2 - {this.state.count2}</h1>
        <button onClick={()=>{this.changeCount2()}}>Increament Count2</button>

        <h1>Count3 - {this.state.count3}</h1>
        <button onClick={()=>{this.bulkIncreament1()}}>5 Increament requests for Count3 to increament it by 1</button>

        <h1>Count4 - {this.state.count4}</h1>
        <button onClick={()=>{this.bulkIncreament2()}}>Increament by 5</button>



        </div>
        )
    }
}

export default UseSetState