import React, { Component } from 'react'

class RefInput extends Component {

    constructor() {
        super()
        this.inpRef = React.createRef()
        this.inp2Ref = null
        
        this.setCbRef = element => {
            this.inp2Ref = element
        } 
    }

    componentDidMount() {
        if(this.inp2Ref) {
            this.inp2Ref.focus()
        }

        // Uncomment below code to use `First way to higlight text field`

        // this.inpRef.current.focus()
        // console.log(this.inpRef)
    }

    alertFun = () => {
        alert(this.inpRef.current.value)
    }
  
  render() {
    return (
      <div>
        {/* First way to higlight text field */}
        <input type='text' ref={this.inpRef}/>
        
        {/* Second way to higlight text field */}
        <input type='text' ref={this.setCbRef}/>

        <button onClick={this.alertFun}>Submit</button>
      </div>
    )
  }
}

export default RefInput