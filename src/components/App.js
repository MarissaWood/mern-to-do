import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import axios from "axios";
import NewItem from "./NewItem";
import List from "./List";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
// import ItemUpdate from './ItemUpdate'

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("https://mern-to-do-api.herokuapp.com/users/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("https://mern-to-do-api.herokuapp.com/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    let userLinks;
    if (this.state.isLoggedIn) {
      userLinks = (
        <button value="Log Out" type="submit" onClick={this.handleLogOut}>
          Log Out{" "}
        </button>
      );
    } else {
      userLinks = (
        <div>
          <Link to="/login">Log In</Link> <Link to="/signup">Sign Up</Link>
        </div>
      );
    }

    return (
      <Router>
        <div className="App">
          <nav>
            <h1>To Do List Application</h1>
            <Link to="/list">List</Link>
            <Link to="/item/add">Add an Item</Link>
            {userLinks}
          </nav>
          <main>
            <Switch>
              <Route
                path="/item/add"
                // component={NewItem}
                render={props => {
                  return <NewItem isLoggedIn={this.state.isLoggedIn} />;
                }}
              />
              {/* <Route
              path='/item/:id'
              render={(props) => <ItemUpdate />}
            /> */}
              <Route
                path="/list"
                // component={List}
                render={props => {
                  return <List isLoggedIn={this.state.isLoggedIn} />;
                }}
              />
              <Route
                path="/signup"
                render={props => {
                  return (
                    <SignUpForm
                      isLoggedIn={this.state.isLoggedIn}
                      handleInput={this.handleInput}
                      handleSignUp={this.handleSignUp}
                    />
                  );
                }}
              />
              {/* <Route path='/logout'
                render={(props) => {
                  return (
                    <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                  )
                }} 
              /> */}
              <Route
                path="/login"
                render={props => {
                  return (
                    <LogInForm
                      isLoggedIn={this.state.isLoggedIn}
                      handleInput={this.handleInput}
                      handleLogIn={this.handleLogIn}
                    />
                  );
                }}
              />
              <Route path="/*" render={() => <Redirect to="/list" />} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
