import React, { Component } from 'react'
import Item from './Item'
import axios from 'axios'

class List extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/items')
      .then((res) => {
        console.log(res)
        this.setState({
          items: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    let itemList = this.state.items.map((item) => {
      return <li><Item task={item.task} status={item.status} /> </li>
    })

    return (
      <div>
        <h1>To Do List: </h1>
        <ul>
          {itemList}
        </ul>
      </div>
    )
  }
}

export default List
