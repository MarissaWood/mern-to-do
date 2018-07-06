import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Item extends Component {
    constructor () {
      super()
      this.state = {
        itemID: '',
        redirect: false
      }
    }
  
    componentDidMount () {
      this.setState({
        itemID: this.props.id
      })
      console.log('componentDidMount')
    }

    deleteItem = (e) => {
      e.preventDefault()
      // let url = 'http://localhost:3001/api/items/' + this.state.itemID
      let url = 'https://mern-to-do-api.herokuapp.com/api/items' + this.state.itemID
      // code DELETE ITEM
      axios.delete(url)
        .then((res) => {
          console.log(res)
          this.render()
          this.setState({
            redirect: true
          })
        }).catch((err) => {
          console.log(err)
        })
    }

    markComplete = (e) => {
      e.preventDefault()
      // let url = 'http://localhost:3001/api/items/' + this.state.itemID
      let url = 'https://mern-to-do-api.herokuapp.com/api/items' + this.state.itemID
      // code UPDATE ITEM
      axios.put(url)
        .then((res) => {
          console.log(res)
          this.render()
          this.setState({
            redirect: true
          })
        }).catch((err) => {
          console.log(err)
        })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
    }

    render () {
      let status
      let task 
      if (this.props.status === 'incomplete') { 
        status =    <input type="checkbox" onClick={this.markComplete} /> 
        task = <p className='task'> {this.props.task} </p>
      } else {
        status =   <input type="checkbox" onClick={this.markComplete} checked /> 
        task = <p className='task-complete'> {this.props.task} </p>
      }
    return (
      <div className='item'>
      {this.renderRedirect()}
        {task}
        <p>{status}</p>
        <p><Link to='/' onClick={this.deleteItem} >Delete Item </Link></p>
      </div>
    )
  }
}

export default Item
