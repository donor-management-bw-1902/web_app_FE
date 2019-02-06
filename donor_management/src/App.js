import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import './App.css';
import { SignUpView, LoginView, DonorsView, AdminView, CreateDonorView } from './views';

class App extends Component {
  signOut = e => {
    e.preventDefault();
    localStorage.removeItem('AuthToken');
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.signOut}>Sign Out</button>
        <Route exact path = "/" component = {LoginView}/>
        <Route path = "/sign-up" component = {SignUpView} />
        <Route path = "/donors" component = {DonorsView} />
        <Route path = "/admin" component = {AdminView} />
        <Route path = "/donor" component = {CreateDonorView} />
      </div>
    );
  }
}
export default withRouter(App);
