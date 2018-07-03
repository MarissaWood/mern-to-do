import React, { Component } from 'react'
import './App.css'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import NewItem from './NewItem'
import List from './List'
// import ItemUpdate from './ItemUpdate'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <nav>
          <h1>To Do List Application</h1>
          <Link to='/list'>List</Link>
          <Link to='/item/add'>Add an Item</Link>
        </nav>
        <main>
          <Switch>
            <Route
              path='/item/add'
              component={NewItem}
            />
            {/* <Route
              path='/item/:id'
              render={(props) => <ItemUpdate />}
            /> */}
            <Route
              path='/list'
              component={List}
            />
            <Route
              path='/'
              render={() => <Redirect to='/list' />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
