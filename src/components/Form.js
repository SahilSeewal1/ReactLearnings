import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            comment: '',
            value: 'React'
        }
    }

    userHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    commentHandler = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`username: ${this.state.username}, comment:  ${this.state.comment}`)
        event.preventDefault()
    }

    optionHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

  render() {
    const {username, comment, value} = this.state
    return (
      <div>
        Form
        <form onSubmit={this.submitHandler}>
        <div><label>Username:</label> <input type='text' value = {username} onChange = {this.userHandler} /></div>
        <div><label>Comments: </label> <textarea value = {comment} onChange = {this.commentHandler} /></div>
        <div><label>Topic: </label> 
        <select value={value} onChange = {this.optionHandler}>
            <option>Angular</option>
            <option>React</option>
            <option>Vue</option>
        </select>
        </div>
        <div><button type='submit' onChange = {this.submitHandler}>Submit</button></div>        
        </form>
      </div>
    )
  }
}

export default Form