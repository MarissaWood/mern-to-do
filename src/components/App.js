import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'

import NewItem from './NewItem'
import List from './List'
// import ItemUpdate from './ItemUpdate'

class App extends Component {
  render () {
    return (
      <Router>
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
      </Router>
    )
  }
}

export default App
