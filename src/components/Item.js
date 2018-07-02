import React, { Component } from 'react'

class Item extends Component {
  render () {
    return (
      <div className='item'>
        <p> this is an item</p>
        <p>Status: </p>
        <button onClick={this.deleteItem} >Delete Item </button>
      </div>
    )
  }
}

export default Item
