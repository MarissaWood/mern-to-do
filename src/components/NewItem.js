import React, { Component } from 'react'

class NewItem extends Component {
  constructor () {
    super()
    this.state = {
      addTask: ''
    }
  }

  handleInput (e) {
    this.setState({
      addTask: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    // code POST new item to database
    
  }

  render () {
    return (
      <div>
        <h1>Add a To-Do Item:</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>New Task:</p>
          <br />
          <textarea name='task' onChange={(e) => this.handleInput(e)} />
          <br />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default NewItem
