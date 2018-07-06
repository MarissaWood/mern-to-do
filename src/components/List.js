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
    axios.get('https://mern-to-do-api.herokuapp.com/api/items')
      .then((res) => {
        console.log(res)
        this.setState({
          items: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })

    // console.log('list: component did mount')
    // this.setState({
    //   items: this.props.tasks
    // })
  }

  render () {
    let itemList = this.state.items.map((item, idx) => {
      return <li><Item isLoggedIn={this.props.isLoggedIn} task={item.task} status={item.status} id={item._id} key={idx} /> </li>
    })

    return (
      <div>
        <h1>To Do List: </h1>
        <ul>
          {itemList}
          {/* {this.state.items.map((item) => {
            <li><Item task={item.task} status={item.status} id={item._id} /></li>
          })} */}
        </ul>
      </div>
    )
  }
}

export default List
