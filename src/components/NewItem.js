import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios' 

class NewItem extends Component {
  constructor () {
    super()
    this.state = {
      addTask: '',
      redirect: false
    }
  }

  handleInput = (e) => {
    this.setState({
      addTask: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      task: this.state.addTask,
      status: 'incomplete'
    }
    // code POST new item to database
    axios.post('https://mern-to-do-api.herokuapp.com/api/items', {item})
    // axios({
    //   method: 'post',
    //   url: 'https://mern-to-do-api.herokuapp.com/api/items',
    //   data: {
    //     task: this.state.addTask,
    //     status: 'incomplete'
    //   }
    // })
      .then((res) => {
        console.log(res)
        console.log(res.data)
        this.setState({
          redirect: true
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/list' />
    }
  }

  render () {
    return (
      <div>
        {this.renderRedirect()}
        <h1>Add a To-Do Item:</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>New Task:</p>
          <br />
          <textarea name='task' rows="4" cols="50" onChange={(e) => this.handleInput(e)} />
          <br />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  } 
}

export default NewItem
