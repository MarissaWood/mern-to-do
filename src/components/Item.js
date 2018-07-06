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
      let url = 'http://localhost:3001/api/items/' + this.state.itemID
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
      let url = 'http://localhost:3001/api/items/' + this.state.itemID
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
      let update
      if (this.props.status === 'incomplete') { 
        update = <Link to='/' onClick={this.markComplete} >Mark Complete</Link> 
    }
    return (
      <div className='item'>
      {this.renderRedirect()}
        <p className='task'> {this.props.task} </p>
        <p>{this.props.status} <br /> {update} </p>
        <p><Link to='/' onClick={this.deleteItem} >Delete Item </Link></p>
      </div>
    )
  }
}

export default Item
