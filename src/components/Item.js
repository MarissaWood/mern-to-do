import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component {
  render () {
    return (
      <div className='item'>
        <p className='task'> {this.props.task} </p>
        <p>{this.props.status}</p>
        <p><Link to='' onClick={this.deleteItem} >Delete Item </Link></p>
      </div>
    )
  }
}

export default Item
