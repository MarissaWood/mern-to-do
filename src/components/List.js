import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  render () {
    return (
      <div>
        <h1>To Do List: </h1>
        <Item />
        <Item />
      </div>
    )
  }
}

export default List
